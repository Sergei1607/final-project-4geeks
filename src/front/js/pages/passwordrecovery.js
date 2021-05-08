import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import blue from "../../img/blue.jpg";
import { Context } from "../store/appContext";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import "../../styles/demo.scss";

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
								<Button variant="primary" onClick={handleShow}>
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
									{/* <div className="dropdown">
										<button
											className="btn btn-secondary dropdown-toggle"
											type="button"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											Dropdown button
										</button>
										<div
											className="dropdown-menu"
											aria-labelledby="dropdownMenuButton"
											onChange={e => setQuestion(e.target.value)}>
											<a className="dropdown-item" href="#">
												¿Cual es tu Color Favorito?
											</a>
											<a className="dropdown-item" href="#">
												¿Como se llama tu madre?
											</a>
											<a className="dropdown-item" href="#">
												¿En donde Naciste?
											</a>
										</div>
									</div> */}
									<h3>{store.user.question}</h3>
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
							<Button variant="primary">Guardar</Button>

							<Button variant="secondary" onClick={handleClose}>
								<Link to="/login">{`Volver al Login`}</Link>
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</div>
	);
};
