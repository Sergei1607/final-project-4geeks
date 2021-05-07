import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import blue from "../../img/blue.jpg";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [password, setPassword] = useState("");
	const [user, setUser] = useState("");

	let registerstyle = {
		backgroundImage: `url(${blue})`,
		position: "relative",
		backgroundRepeat: "no-repeat",
		height: "500px"
    };
    
	return (
		<div className="container-flux">
			<div className="row justify-content-center" style={registerstyle}>
				<div className="CreateUserContainer">
					<div className="createUserContent">
						<div className="formCreateUser">
							<div className="ItemComponent">
								<label className="LabelItemTitle">
									<strong>Inicio de Sesión</strong>
								</label>
							</div>
							<div className="inputContainer">
								<input
									id="username"
									placeholder=" Usuario"
									type="text"
									className="regularStyle"
									onChange={e => setUser(e.target.value)}
								/>
							</div>
							<div className="ItemComponent">
								<label className="LabelItemComponent" />
							</div>
							<div className="inputContainer">
								<input id="email" placeholder=" Correo" type="email" className="regularStyle" />
							</div>
							<div className="ItemComponent">
								<label className="LabelItemComponent" />
							</div>
							<div className="inputContainer">
								<input
									id="password"
									placeholder=" Contraseña"
									type="password"
									className="regularStyle"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="regularButtonLoginContainer">
								<button
									className="regularButtonLoginDisabled"
									onClick={() => {
										actions.login(password, user);
									}}>
									Ingresar
								</button>
							</div>
							<div className="ItemComponent">
								<Link to="/register">
									<a className="LabelItemComponent">Quiero Registrarme </a>
								</Link>
							</div>{" "}
							<div className="ItemComponent">
								<Link to="/passwordrecovery">
									<a className="LabelItemComponent">¿Olvidó su Contraseña?</a>
								</Link>
							</div>{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
