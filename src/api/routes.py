"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Pet,Adopt
from api.utils import generate_sitemap, APIException


from flask_jwt_extended import create_access_token , get_jwt_identity , jwt_required 
# #Debo escribir en consola el comando  pipenv install flask-jwt-extended
import  datetime


api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])
def get_users():
    data = jsonify(User.get_users())
    return data

@api.route('/login',methods=['POST'])
def login():
    if request.method == "POST":
        username =  request.json.get("username", None)
        password = request.json.get("password", None)
        if username is None:
            return jsonify({"user":{"user_adm":"4"}}), 400
        if password is None:
            return jsonify({"user":{"user_adm":"4"}}),400
            
        user = User.query.filter_by(username=username, password=password).first()

        if not user:
            return jsonify({"user":"O"}),400

        request_body = {
            "user":user.serialize()
        }

        return jsonify(request_body),200

@api.route('/token',methods=['POST'])
def token():
    if request.method == "POST":
        username =  request.json.get("username", None)
        password = request.json.get("password", None)
        if username is None:
            return jsonify({"user":{"user_adm":"4"}}), 400
        if password is None:
            return jsonify({"user":{"user_adm":"4"}}),400
            
        user = User.query.filter_by(username=username, password=password).first()

        if not user:
            return jsonify({"user":"O"}),400
        #Create Tokken
        expiration_date = datetime.timedelta(days=1)
        access_token = create_access_token(identity=username,expires_delta=expiration_date)

        request_body = {

            "token":access_token
        }

        return jsonify(request_body),200

@api.route('/recovery',methods=['POST'])
def recovery():
    if request.method == "POST":
        email =  request.json["email"]
       
        if not email:
            return jsonify({"Error":"email Invalid"}), 400
      
        user = User.query.filter_by(email=email).first()

        if not user:
            return jsonify({"user":"O"}),400
        #Create Tokken
        #expiration_date = datetime.timedelta(days=1)
        #access_token = create_access_token(identity=username,expires_delta=expiration_date)

        request_body = {
            "user":user.serialize()
        }

        return jsonify(request_body),200



@api.route('/change_password', methods = ['PUT'])
def change_password():
    question = request.json["question"]
    answer =  request.json["answer"]
    password = request.json["password"]
    user = User.query.filter_by(answer=answer,question=question).first()
    if user.answer == answer and user.question==question:
        user.password = password
        db.session.commit() 
        return jsonify(user.serialize()), 200


@api.route('/register', methods=['POST'])
def register_user():
    username = request.json.get("username",None)
    name = request.json.get("name",None)
    last_name = request.json.get("last_name",None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    question = request.json.get("question",None)
    answer = request.json.get("answer",None)
    user_adm = request.json.get("user_adm",None)

    if username is None:
        return jsonify({"msg":"No username was provided"}),400
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400

    if name is None:
        return jsonify({"msg": "No name was provided"}), 400
    
    if last_name is None:
        return jsonify({"msg": "No last name was provided"}), 400
    
    if question is None:
        return jsonify({"msg": "No question was provided"}), 400
    
    if answer is None:
        return jsonify({"msg": "No answer was provided"}), 400
    
    user = User.query.filter_by(username=username,email=email,name=name,last_name=last_name, password=password,question=question,answer=answer).first()
    if user:
        # the user was not found on the database
        return jsonify({"msg": "User already exists"}), 401
    else:
        new_user = User()
        new_user.username = username
        new_user.email = email
        new_user.name = name
        new_user.last_name = last_name
        new_user.password = password
        new_user.question = question
        new_user.answer = answer
        new_user.user_adm = user_adm
    

        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "User created successfully"}), 200


#Endpoints Pets******************************************

@api.route('/pet', methods=['GET'])
def get_pets():
    data = jsonify(Pet.get_pets())
    return data


@api.route('/get_felinos', methods=['GET'])
def get_type():
    pet = Pet.query.filter_by(type_pet='Felino')
    if pet is None:
        raise APIException("msg: pet not found",status_code=404)
    request = list(map(lambda x: x.serialize(),pet))
    return jsonify(request),200

@api.route('/get_caninos', methods=['GET'])
def get_type_canino():
    pet = Pet.query.filter_by(type_pet='Canino')
    if pet is None:
        raise APIException("msg: pet not found",status_code=404)
    request = list(map(lambda x: x.serialize(),pet))
    return jsonify(request),200


@api.route('/pet', methods=['POST'])
@jwt_required()
def create_pet():
    name = request.json.get("name", None)
    type_pet = request.json.get("type_pet", None)
    sex = request.json.get("sex", None)
    age = request.json.get("age", None)
    history = request.json.get("history", None)
    behaviour = request.json.get("behaviour", None)
    breed = request.json.get("breed", None)
    size = request.json.get("size", None)
    other = request.json.get("other", None)
    image = request.json.get("image", None)

    if name is None:
        return jsonify({"msg":"No name was provided"}), 400
    if type_pet is None:
        return jsonify({"msg": "No type_pet was provided"}),400
    if sex is None:
        return jsonify({"msg": "No type_pet was provided"}),400 
    if age is None:
        return jsonify({"msg": "No age was provided"}), 400
    if history is None:
        return jsonify({"msg": "No history was provided"}), 400
    if behaviour is None:
        return jsonify({"msg": "No behaviour was provided"}), 400
    if breed is None:
        return jsonify({"msg": "No breed was provided"}), 400
    if size is None:
        return jsonify({"msg": "No size was provided"}), 400
    if other is None:
        return jsonify({"msg": "No other was provided"}), 400
    if image is None:
        return jsonify({"msg": "No image was provided"}), 400
    
    pet = Pet.query.filter_by(name=name,type_pet=type_pet,age=age,history=history,behaviour=behaviour,breed=breed,size=size,other=other, image=image).first()
    if pet:
        return jsonify({"msg": "Pet already exists"}), 401
    else:
        new_pet = Pet()
        new_pet.name = name
        new_pet.type_pet = type_pet
        new_pet.sex = sex
        new_pet.age = age
        new_pet.history = history
        new_pet.behaviour = behaviour
        new_pet.breed = breed
        new_pet.size = size
        new_pet.other = other
        new_pet.image = image


        db.session.add(new_pet)
        db.session.commit()
        return jsonify({"msg": "pet created successfully"}), 200


@api.route('/pet/<int:id>', methods=['DELETE'])
@jwt_required()
def  delete_pet(id):
    #current_user = get_jwt_identity()
    pet1 = Pet.query.get(id)
    if pet1 is None:
        raise APIException("Pet is not found",status_code=404)
    db.session.delete(pet1)
    db.session.commit()
    return jsonify({"Succesfully delete by":"hi"}),200

@api.route('/updatepet', methods = ['PUT'])
@jwt_required()
def update_pet():
    ids = request.json["id"]
    pet1 = Pet.query.get(ids)
    name = request.json["name"]
    type_pet = request.json["type_pet"]
    sex = request.json["sex"]
    age = request.json["age"]
    history = request.json["history"]
    behaviour = request.json["behaviour"]
    breed = request.json["behaviour"]
    size = request.json["size"]
    other = request.json["other"]

    pet1.name = name
    pet1.type_pet = type_pet
    pet1.sex = sex    
    pet1.age = age   
    pet1.history = history
    pet1.behaviour = behaviour    
    pet1.breed = breed
    pet1.size = size
    pet1.other = other    
    db.session.commit()
   
    return jsonify(pet1.serialize()), 200

#Endpoints Adopt************************************

@api.route('/adopt', methods=['POST'])
#@jwt_required()
def create_adopt():
    full_name = request.json.get("full_name", None)
    address = request.json.get("address", None)
    telephone = request.json.get("telephone", None)
    mobile_phone = request.json.get("mobile_phone", None)
    email = request.json.get("email", None)
    name_pet = request.json.get("name_pet", None)
   
    if full_name is None:
        return jsonify({"msg":"No full_name was provided"}), 400
    if address is None:
        return jsonify({"msg": "No address was provided"}),400
    if telephone is None:
        return jsonify({"msg": "No telephone was provided"}),400 
    if mobile_phone is None:
        return jsonify({"msg": "No mobile_phone was provided"}), 400
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400

    if name_pet is None:
        return jsonify({"msg": "No name_pet was provided"}), 400
    
    
    adopt = Adopt.query.filter_by(full_name=full_name,address=address,telephone=telephone,mobile_phone=mobile_phone,email=email,name_pet=name_pet).first()
    if adopt:
        return jsonify({"msg": "Error"}), 401
    else:
        new_adopt = Adopt()
        new_adopt.full_name = full_name
        new_adopt.address = address
        new_adopt.telephone = telephone
        new_adopt.mobile_phone = mobile_phone
        new_adopt.email = email
        new_adopt.name_pet = name_pet
       

        db.session.add(new_adopt)
        db.session.commit()
        return jsonify({"msg": "created successfully"}), 200

@api.route('/adopt', methods=['GET'])
def get_adopts():
    data = jsonify(Adopt.get_adopt())
    return data

@api.route('/adopt/<int:id>', methods=['DELETE'])
@jwt_required()
def  delete_adopt(id):
    #current_user = get_jwt_identity()
    adopt1 = Adopt.query.get(id)
    if adopt1 is None:
        raise APIException("adopt is not found",status_code=404)
    db.session.delete(adopt1)
    db.session.commit()
    return jsonify({"Succesfully delete by":"hi"}),200