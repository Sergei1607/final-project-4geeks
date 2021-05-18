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
	const [show2, setShow2] = useState(false);

	const toggleShow = () => setShow(true);
	const toggleShow2 = () => setShow2(true);

	const [password, setPassword] = useState("");
	const [user, setUser] = useState("");

	let registerstyle = {
		backgroundImage: `url(${blue})`,
		position: "relative",
		backgroundRepeat: "no-repeat"
	};
	let iconStyle = {
		color: "#27A1C6",
		// marginBottom: "30px",
		marginTop: "20px"
	};

	let containerStyle = { height: "770px", backgroundImage: `url(${blue})`, marginRight: "12px" };

	const ingresar = async (password, user) => {
		await actions.login(password, user);
		await actions.gettoken(password, user);
		console.log(store.user.user_adm);
		if (store.user.user_adm === "1") {
			toggleShow();
		} else {
			toggleShow2();
		}
		await new Promise(r => setTimeout(r, 1000));
		window.location.reload(false);
	};

	return (
		<div style={containerStyle}>
			<div className="row justify-content-center" style={containerStyle}>
				<div className="CreateUserContainer" style={containerStyle}>
					<div className="createUserContent">
						<div className="formCreateUser">
							<div className=" text-center">
								<i className="fas fa-paw fa-3x" id="changecolor" style={iconStyle} />
							</div>
							<div className="ItemComponent">
								<label className="LabelItemTitle">
									<strong>Inicio de Sesión</strong>
								</label>
							</div>
							<div className="inputContainer">
								<input
									id="username"
									placeholder="  Usuario"
									type="text"
									className="regularStyle"
									onChange={e => setUser(e.target.value)}
								/>
							</div>
							<div className="ItemComponent">
								<label className="LabelItemComponent" />
							</div>
							<div className="inputContainer">
								<input id="email" placeholder="  Correo" type="email" className="regularStyle" />
							</div>
							<div className="ItemComponent">
								<label className="LabelItemComponent" />
							</div>
							<div className="inputContainer">
								<input
									id="password"
									placeholder=" Contraseña"
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
										ingresar(password, user);
									}}>
									Ingresar
								</button>
							</div>
							<div className="ItemComponent">
								<Link to="/register">
									<a className="LabelItemComponent">Quiero Registrarme </a>
								</Link>
							</div>{" "}
							<div className="ItemComponent p-2">
								<Link to="/passwordrecovery">
									<a className="LabelItemComponent p-4">¿Olvidó su Contraseña?</a>
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
									top: 40,
									right: 120,
									width: "350px"
								}}>
								<Toast.Header>
									<img src={Logo} className="rounded mr-2" alt="" height="30px" width="30px" />
									<strong className="mr-auto">Ángeles de los animales Santa Rosa</strong>
								</Toast.Header>
								<Toast.Body className="text-center">¡Gracias por estár acá!</Toast.Body>
							</Toast>
						</Col>
					</Row>
				</div>
				<div className="row" style={registerstyle}>
					<Row>
						<Col>
							<Toast
								show={show2}
								onClose={() => setShow2(false)}
								delay={3000}
								autohide
								style={{
									position: "absolute",
									top: 40,
									right: 100,
									width: "350px"
								}}>
								<Toast.Header>
									<img src={Logo} className="rounded mr-2" alt="" height="30px" width="30px" />
									<strong className="mr-auto">Ángeles de los animales Santa Rosa</strong>
								</Toast.Header>
								<Toast.Body className="text-center p-2"> Contraseña o usuario no encontrado</Toast.Body>
							</Toast>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};
