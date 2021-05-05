import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import naranja from "../../img/naranja.jpg";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	let registerstyle = {
		backgroundImage: `url(${naranja})`,
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
							<input id="username" placeholder name="username" type="text" className="regularStyle" />
						</div>
						<div className="ItemComponent">
							<label className="LabelItemComponent">Correo Electronico</label>
						</div>
						<div className="inputContainer">
							<input id="password" placeholder name="password" type="password" className="regularStyle" />
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
								className="regularStyle"
							/>
						</div>
						<div className="regularButtonLoginContainer">
							<Link to="/">
								<button className="regularButtonLoginDisabled">Ingresar</button>
							</Link>
						</div>
						<div className="ItemComponent">
							<Link to="/register">
								<label className="LabelItemComponent">Quiero Registrarme </label>
							</Link>
						</div>{" "}
					</div>
				</div>
			</div>
		</div>
	);
};
