import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import quienes from "../../img/quienes.png";
import blue from "../../img/blue.jpg";

import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);

	let registerstyle = {
		backgroundImage: `url(${blue})`,
		position: "relative",
		backgroundRepeat: "no-repeat",
		height: "1400px"
	};

	return (
		<div className="row justify-content-center" style={registerstyle}>
			<div className="CreateUserContainer">
				<div className="createUserContent">
					<div className="formCreateUser">
						<div className="ItemComponent">
							<label className="LabelItemComponent">Usuario</label>
						</div>
						<div className="inputContainer">
							<input
								id="username"
								placeholder
								name="username"
								type="text"
								className="regularStyle"></input>
						</div>
						<div className="ItemComponent">
							<label className="LabelItemComponent">Nombre</label>
						</div>
						<div className="inputContainer">
							<input
								id="firstname"
								placeholder
								name="firstname"
								type="text"
								className="regularStyle"></input>
						</div>
						<div className="ItemComponent">
							<label className="LabelItemComponent">Apellidos</label>
						</div>
						<div className="inputContainer">
							<input
								id="lastname"
								placeholder
								name="lastname"
								type="text"
								className="regularStyle"></input>
						</div>
						<div className="ItemComponent">
							<label className="LabelItemComponent">Correo Electronico</label>
						</div>
						<div className="inputContainer">
							<input
								id="password"
								placeholder
								name="password"
								type="password"
								className="regularStyle"></input>
						</div>
						<div className="ItemComponent">
							<label className="LabelItemComponent">Contraseña</label>
						</div>
						<div className="inputContainer">
							<input
								id="passwordAgain"
								placeholder
								name="passwordAgain"
								type="password"
								className="regularStyle"></input>
						</div>
						<div className="ItemComponent">
							<label className="LabelItemComponent">Pregunta Secreta</label>
						</div>
						<div className="inputContainer">
							<select name="transporte" className="regularStyle">
								<option>¿Cual es tu Color Favorito?</option>

								<option>¿Como se llama tu madre?</option>

								<option>¿En donde Naciste?</option>
							</select>
						</div>
						<div className="ItemComponent">
							<label className="LabelItemComponent">Respuesta</label>
						</div>
						<div className="inputContainer">
							<input id="answer" placeholder name="answer" type="text" className="regularStyle"></input>
						</div>
						<div className="regularButtonLoginContainer">
							<Link to="/">
								<button className="regularButtonLoginDisabled">Registrarse</button>
							</Link>
						</div>
						<div className="ItemComponent">
							<Link to="/login">
								<label className="LabelItemComponent">Quiero Loguearme </label>
							</Link>
						</div>{" "}
					</div>
				</div>
			</div>
		</div>
	);
};
