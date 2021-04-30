from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import  Column ,ForeignKey,Integer,String  

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=True, nullable=False)
    user_adm = db.Column(db.String(80))



    def __repr__(self):
        return '<User %r>' % self.username
    
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username":self.username,
            "user_adm":self.user_adm,
            # do not serialize the password, its a security breach
        }
    def get_users():
        all_users = User.query.all()
        all_users = list(map(lambda x: x.serialize(),all_users))
        return all_users


class Pet(db.Model):
    id = Column(Integer,primary_key=True)
    name = Column(String(250),nullable=False)
    type_pet = Column(String(250),nullable=False)
    sex = Column(String(250),nullable=False)
    age = Column(String(250),nullable=False)
    history = Column(String(250),nullable=False)
    behaviour = Column(String(250),nullable=False)
    breed = Column(String(250),nullable=False)
    size = Column(String(250),nullable=False)
    other = Column(String(250),nullable=False)
    image = Column(String(250),nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type_pet":self.type_pet,
            "sex":self.sex,
            "age":self.age,
            "history":self.history,
            "behaviour":self.behaviour,
            "breed":self.breed,
            "size":self.size,
            "other":self.other,
            "image":self.image

        }
    def get_pets():
        all_pets = Pet.query.all()
        all_pets = list(map(lambda x: x.serialize(),all_pets))
        return all_pets

    def get_type():
        all_type = pet.query.select(type_pet)
        all_type = list(map(lambda x: x.serialize(),all_type))
        return all_type



class Adopt(db.Model):
    id = Column(Integer,primary_key=True)
    full_name = Column(String(250),nullable=False)
    address = Column(String(250),nullable=False)
    telephone = Column(String(250),nullable=True)
    mobile_phone = Column(String(250),nullable=False)
    email = Column(String(250),nullable=False)
    pet_id = Column(Integer, ForeignKey('pet.id'))
    pet = db.relationship("Pet", lazy=True)


    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "address":self.address,
            "telephone":self.telephone,
            "mobile_phone":self.mobile_phone,
            "email":self.email,
            "pet_id":self.pet_id,

        }
    def get_adopt():
        all_adopt = Adopt.query.all()
        all_adopt = list(map(lambda x: x.serialize(),all_adopt))
        return all_adopt