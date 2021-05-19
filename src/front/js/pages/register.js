import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import quienes from "../../img/quienes.png";
import blue from "../../img/blue.jpg";
import { Row, Col, Toast, Button } from "react-bootstrap";
import Logo from "../../img/Logo.png";

import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(false);
	const toggleShow = () => setShow(true);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [last_name, setLast_name] = useState("");
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");

	let registerstyle = {
		backgroundImage: `url(${blue})`,
		position: "relative",
		backgroundRepeat: "no-repeat",
		height: "2000px"
	};

	let colorStyle = {
		backgroundColor: "#f6b26b",
		borderRadius: "20%"
	};

	let iconStyle = {
		color: "#27A1C6",
		// marginBottom: "30px",
		marginTop: "20px"
	};
	function registerUser() {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			username: username,
			email: email,
			password: password,
			name: name,
			last_name: last_name,
			question: question,
			answer: answer,
			user_adm: "0"
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/register", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}

	return (
		<div className="row justify-content-center" style={registerstyle}>
			<div className="CreateUserContainer p-5">
				<div className="createUserContent2">
					<div className="formCreateUser">
						<div className=" text-center">
							<i className="fas fa-paw fa-3x mt-5" id="changecolor" style={iconStyle} />
						</div>
						<div className="ItemComponent">
							<label className="LabelItemTitleRegister">Registro de Usuario</label>
						</div>
						<div className="inputContainer">
							<input
								id="username"
								placeholder=" Usuario"
								type="text"
								className="regularStyle"
								onChange={e => setUsername(e.target.value)}
							/>
						</div>
						<div className="ItemComponent"></div>
						<div className="inputContainer">
							<input
								id="firstname"
								placeholder=" Nombre"
								type="text"
								className="regularStyle"
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className="ItemComponent"></div>
						<div className="inputContainer">
							<input
								id="lastname"
								placeholder=" Apellidos"
								type="text"
								className="regularStyle"
								onChange={e => setLast_name(e.target.value)}
							/>
						</div>
						<div className="ItemComponent"></div>
						<div className="inputContainer">
							<input
								id="email"
								placeholder=" Correo Electronico"
								type="email"
								className="regularStyle"
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="ItemComponent"></div>
						<div className="inputContainer">
							<input
								id="passwordAgain"
								placeholder=" Contraseña"
								type="password"
								className="regularStyle"
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className="ItemComponent"></div>
						<div className="inputContainer">
							<select
								name="transporte"
								className="regularStyle"
								placeholder="Pregunta Secreta"
								onChange={e => setQuestion(e.target.value)}>
								<option>¿Cuál es su película favorita?</option>

								<option>¿Cuál fue el nombre de su primera mascota?</option>

								<option>¿Nombre de la escuela a la que asististe?</option>
							</select>
						</div>
						<div className="ItemComponent"></div>
						<div className="inputContainer">
							<input
								id="answer"
								placeholder=" Respuesta"
								type="text"
								className="regularStyle"
								onChange={e => setAnswer(e.target.value)}
							/>
						</div>
						<div className="regularButtonLoginContainer">
							<button
								id="test"
								style={colorStyle}
								className="regularButtonLoginDisabled"
								onClick={() => {
									registerUser();
									toggleShow();
								}}>
								Registrarse
							</button>
						</div>
						<div className="ItemComponent">
							<Link to="/login">
								<a className="LabelItemComponent">Quiero Acceder </a>
							</Link>
							<br />
							<br />
							<br />
						</div>{" "}
					</div>
				</div>
			</div>
			<div className="row">
				<Row>
					<Col>
						<Toast
							show={show}
							onClose={() => setShow(false)}
							delay={3000}
							autohide
							style={{
								position: "absolute",
								top: 40,
								right: 120,
								width: "350px"
							}}>
							<Toast.Header>
								<img src={Logo} className="rounded mr-2" alt="" height="30px" width="30px" />
								<strong className="mr-auto">Ángeles de los animales Santa Rosa</strong>
							</Toast.Header>
							<Toast.Body className="text-center">Usuario creado, inicia sesión</Toast.Body>
						</Toast>
					</Col>
				</Row>
			</div>
		</div>
	);
};
