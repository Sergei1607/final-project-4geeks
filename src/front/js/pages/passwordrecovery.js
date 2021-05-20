import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import blue from "../../img/blue.jpg";
import { Context } from "../store/appContext";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import "../../styles/demo.scss";
import swal from "sweetalert";

export const PasswordRecovery = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");

	let registerstyle = {
		backgroundImage: `url(${blue})`,
		position: "relative",
		backgroundRepeat: "no-repeat",
		height: "500px"
	};

	function mostrarAlerta() {
		swal({
			title: "Recuperar contraseña",
			text: "Contraseña cambiada",
			icon: "success"
		});
	}

	let containerStyle = { height: "770px", backgroundImage: `url(${blue})`, marginRight: "12px" };

	function modifyPassword(respuesta, contraseña) {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			question: store.user_recovery.question,
			answer: respuesta,
			password: contraseña
		});

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/change_password", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}

	return (
		<div className="container-flux" style={containerStyle}>
			<div className="row justify-content-center p-5" style={registerstyle}>
				<div className="CreateUserContainer">
					<div className="createUserContent   p-5">
						<div className="formCreateUser">
							<div className="ItemComponent ">
								<label className="LabelItemTitle">
									<strong>Recuperar Contraseña</strong>
								</label>
							</div>
							<div className="inputContainer">
								<input
									id="email"
									placeholder=" Email"
									type="text"
									className="regularStyle"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="ItemComponent">
								<label className="LabelItemComponent" />
							</div>
							<div className="regularButtonLoginContainer">
								<Button
									id="test"
									className="regularButtonLoginDisabled"
									onClick={() => {
										actions.user_recovery(email);
										console.log(email);
										handleShow();
									}}>
									Enviar
								</Button>
							</div>
						</div>
					</div>
				</div>

				<div className="Container">
					<Modal show={show} onHide={handleClose} size="lg">
						<Modal.Header closeButton>
							<Modal.Title>Cambiar la Contraseña</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<form>
								<div className="form-group">
									<label htmlFor="exampleFormControlSelect1">Pregunta secreta</label>
									<h3 className="p-3">{store.user_recovery.question}</h3>
								</div>

								<div className="form-group">
									<label htmlFor="exampleFormControlSelect2">Escriba la respuesta</label>
									<input
										type="text"
										className="form-control"
										id="exampleFormControlSelect2"
										aria-describedby="emailHelp"
										onChange={e => setAnswer(e.target.value)}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="exampleFormControlSelect3">Nuevo password</label>
									<input
										type="password"
										className="form-control"
										id="exampleFormControlSelect3"
										aria-describedby="emailHelp"
										onChange={e => setPassword(e.target.value)}
									/>
								</div>
							</form>
						</Modal.Body>
						<Modal.Footer>
							<Button
								className="regularButtonLoginDisabled"
								variant="primary"
								onClick={() => {
									modifyPassword(answer, password);
									mostrarAlerta();
									window.location.reload(false);
								}}>
								Guardar
							</Button>
							<Link to="/login">
								<Button className="regularButtonLoginDisabled" variant="primary" onClick={handleClose}>
									Volver al login
								</Button>
							</Link>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</div>
	);
};
