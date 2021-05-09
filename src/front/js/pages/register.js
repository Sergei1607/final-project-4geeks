import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import quienes from "../../img/quienes.png";
import blue from "../../img/blue.jpg";

import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);

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
		height: "1400px"
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
			answer: answer
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch("https://3001-purple-cattle-f93fcd45.ws-us03.gitpod.io/api/register", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}

	return (
		<div className="row justify-content-center" style={registerstyle}>
			<div className="CreateUserContainer">
				<div className="createUserContent">
					<div className="formCreateUser">
						<div className=" text-center">
							<i className="fas fa-paw fa-3x" id="changecolor" style={iconStyle} />
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
								<option>¿Cual es tu Color Favorito?</option>

								<option>¿Como se llama tu madre?</option>

								<option>¿En donde Naciste?</option>
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
								className="btn btn-primary"
								onClick={() => {
									registerUser();
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
		</div>
	);
};
