import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import blue from "../../img/blue.jpg";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const PasswordRecovery = () => {
	const { store, actions } = useContext(Context);

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
									<strong>Recuperar Contraseña</strong>
								</label>
							</div>
							<div className="inputContainer">
								<input id="email" placeholder=" Email" type="text" className="regularStyle" />
							</div>
							<div className="ItemComponent">
								<label className="LabelItemComponent" />
							</div>
							<div className="regularButtonLoginContainer">
								<Link to="/">
									<button className="regularButtonLoginDisabled">Enviar</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
