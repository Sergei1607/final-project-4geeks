import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import blue from "../../img/blue.jpg";
import { Context } from "../store/appContext";
import { Row, Col, Toast, Button } from "react-bootstrap";
import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const [show1, setShow1] = useState(false);

	const toggleShow = () => setShow(true);
	const toggleShow1 = () => setShow1(true);

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
									id="test"
									className="regularButtonLoginDisabled"
									onClick={() => {
										actions.login(password, user);
										if (store.user.user_adm === "1") {
											toggleShow1();
										} else {
											toggleShow();
										}
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
				<div className="row" style={registerstyle}>
					<Row>
						<Col>
							<Toast
								show={show}
								onClose={() => setShow(false)}
								delay={3000}
								autohide
								style={{
									position: "absolute",
									top: 50,
									right: 50,
									width: "350px"
								}}>
								<Toast.Header>
									<img src={Logo} className="rounded mr-2" alt="" height="30px" width="30px" />
									<strong className="mr-auto">Ángeles de los animales Santa Rosa</strong>
								</Toast.Header>
								<Toast.Body className="text-center"> Bienvenida Administradora</Toast.Body>
							</Toast>
						</Col>
					</Row>
				</div>
				<div className="row" style={registerstyle}>
					<Row>
						<Col>
							<Toast
								show={show1}
								onClose={() => setShow1(false)}
								delay={3000}
								autohide
								style={{
									position: "absolute",
									top: 50,
									right: 50,
									width: "350px"
								}}>
								<Toast.Header>
									<img src={Logo} className="rounded mr-2" alt="" height="30px" width="30px" />
									<strong className="mr-auto">Ángeles de los animales Santa Rosa</strong>
								</Toast.Header>
								<Toast.Body className="text-center"> ¡Hola, gracias por estár acá!</Toast.Body>
							</Toast>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};
