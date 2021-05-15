import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Row, Col, Toast, Button } from "react-bootstrap";
import Logo from "../../img/Logo.png";
import blue from "../../img/blue.jpg";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export function PetCRUD() {
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
	const [show4, setShow4] = useState(false);
	const { store, actions } = useContext(Context);

	const [render, setRender] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleClose2 = () => setShow2(false);
	const handleClose3 = () => setShow3(false);
	const handleShow2 = () => setShow2(true);
	const toggleShow3 = () => setShow3(true);
	const toggleShow4 = () => setShow4(true);

	const [loading, setLoading] = useState(false);
	const [image, setImage] = useState("");
	const [name, setName] = useState("");
	const [typepet, setTypepet] = useState("");
	const [sex, setSex] = useState("");
	const [age, setAge] = useState("");
	const [behaviour, setBehaviour] = useState("");
	const [raza, setRaza] = useState("");
	const [size, setSize] = useState("");
	const [history, setHistory] = useState("");
	const [ids, setIds] = useState("");
	const [otro, setOtro] = useState("");
	const [send, setSend] = useState(false);

	const [value, setValue] = useState(false);
	const [mascotas, setMascotas] = useState([]);

	let styles = { height: "300", width: "300px" };

	let over = {
		overflowX: "scroll",
		flexWrap: "nowrap",
		marginBottom: "20px",
		backgroundColor: "rgb(180, 250, 255  )"
	};

	let over2 = {
		overflowX: "scroll",
		flexWrap: "nowrap",
		marginBottom: "20px",
		backgroundColor: "#005073",
		color: "white"
	};

	let iconStyle = {
		color: "#27A1C6"
	};

	useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow"
		};

		fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/pet", requestOptions)
			.then(response => response.json())
			.then(result => setMascotas(result))
			.catch(error => console.log("error", error));
	}, [value]);

	const nameRef = useRef(name);

	useEffect(() => {
		if (render === false) {
			setRender(true);
		} else {
			nameRef.current = name;
			console.log(nameRef.current);
		}
	}, [name]);

	const initialRender = useRef(true);

	useEffect(() => {
		console.log("render");

		if (initialRender.current) {
			initialRender.current = false;
		} else {
			editPet();
		}
	}, [send]);

	function editPet() {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			age: "2 meses",
			behaviour: "Cariñosa,juguetona",
			breed: "Cariñosa,juguetona",
			history:
				"Fue rescatada de un barrio conflictivo junto con su mamá, fue la única sobreviviente de la camada",
			image: "TEST",
			name: "ddd",
			other:
				"Desparasitada, castración obligatoria cuando corresponda. Utiliza caja de arena, se recomienda casa anti escape",
			sex: "Hembra",
			size: "N/A",
			type_pet: "canino",
			id: "4"
		});

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw
		};

		fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/updatepet", requestOptions)
			.then(response => response.json())
			.then(result => console.log(result))
			.then(e => {
				setValue(true);
			})
			.catch(error => console.log("error", error));
	}

	const uploadImage = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "4geeks");
		setLoading(true);

		const res = await fetch("https://api.cloudinary.com/v1_1/sergei16/image/upload", {
			method: "POST",
			body: data
		});

		const file = await res.json();

		console.log(file);

		setImage(file.secure_url);
		setLoading(false);
	};

	function createPet() {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			age: age,
			behaviour: behaviour,
			breed: raza,
			history: history,
			name: name,
			other: otro,
			sex: sex,
			size: size,
			type_pet: typepet,
			image: image
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/pet", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}

	return (
		<div className="container mt-2">
			<div className="row">
				<div className="row d-flex align-items-center" style={over2}>
					<div className="col-2 text-center">
						<h3>Acción</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Nombre</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Tipo de mascota</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Sexo</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Raza</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Tamaño</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Comportamiento</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Edad</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Historia</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Más información</h3>
					</div>
				</div>
				{mascotas.map((item, index) => {
					return (
						<div className="row d-flex align-items-center" style={over} key={index}>
							<div className="col-2 text-center">
								<span>
									<i
										className="fas fa-edit fa-2x px-1"
										style={iconStyle}
										onClick={() => {
											setImage(item.image);
											setName(item.name);
											setTypepet(item.type_pet);
											setSex(item.sex);
											setAge(item.age);
											setBehaviour(item.behaviour);
											setRaza(item.breed);
											setSize(item.size);
											setHistory(item.history);
											setOtro(item.other);
											setIds(item.id);
											handleShow2();
										}}
									/>
								</span>
								<span>
									<i
										className="fas fa-trash fa-2x px-1"
										style={iconStyle}
										onClick={() => {
											actions.deletepet(item.id);
										}}
									/>
								</span>
							</div>
							<div className="col-2 text-center">
								<h7>{item.name}</h7>
							</div>
							<div className="col-2 text-center">
								<h7>{item.type_pet}</h7>
							</div>
							<div className="col-2 text-center">
								<h7>{item.sex}</h7>
							</div>
							<div className="col-2 text-center">
								<h7>{item.breed}</h7>
							</div>
							<div className="col-2 text-center">
								<h7>{item.size}</h7>
							</div>
							<div className="col-2 text-center">
								<h7>{item.behaviour}</h7>
							</div>
							<div className="col-2 text-center">
								<h7>{item.age}</h7>
							</div>
							<div className="col-2 text-center">
								<h7>{item.history}</h7>
							</div>
							<div className="col-2 text-center">
								<h7>{item.other}</h7>
							</div>

							<Modal show={show2} onHide={handleClose2} size="lg">
								<Modal.Header closeButton>
									<Modal.Title>Editar Mascota</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<form>
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">Nombre de la mascota</label>
											<input
												type="text"
												className="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder={name}
												onChange={e => setName(e.target.value)}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect1">Tipo de mascota</label>
											<input
												type="text"
												className="form-control"
												id="exampleFormControlSelect1"
												aria-describedby="emailHelp"
												onChange={e => setTypepet(e.target.value)}
												placeholder={typepet}
												p
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect12">Sexo de la mascota</label>
											<input
												type="text"
												className="form-control"
												id="exampleFormControlSelect12"
												aria-describedby="emailHelp"
												onChange={e => setSex(e.target.value)}
												placeholder={sex}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputEmail19">Edad</label>
											<input
												type="text"
												className="form-control"
												id="exampleInputEmail19"
												aria-describedby="emailHelp"
												onChange={e => setAge(e.target.value)}
												placeholder={age}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputEmail13">Comportamiento</label>
											<input
												type="text"
												className="form-control"
												id="exampleInputEmail13"
												onChange={e => setBehaviour(e.target.value)}
												placeholder={behaviour}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputEmail4">Raza</label>
											<input
												type="text"
												className="form-control"
												id="exampleInputEmail4"
												aria-describedby="emailHelp"
												onChange={e => setRaza(e.target.value)}
												placeholder={raza}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputEmail5">Tamaño</label>
											<input
												type="text"
												className="form-control"
												id="exampleInputEmail5"
												aria-describedby="emailHelp"
												onChange={e => setSize(e.target.value)}
												placeholder={size}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputEmail16">Historia</label>
											<input
												type="text"
												className="form-control"
												id="exampleInputEmail16"
												aria-describedby="emailHelp"
												onChange={e => setHistory(e.target.value)}
												placeholder={history}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputEmail17">Más información</label>
											<input
												type="text"
												className="form-control"
												id="exampleInputEmail17"
												aria-describedby="emailHelp"
												onChange={e => setOtro(e.target.value)}
												placeholder={otro}
											/>
										</div>
										<form>
											<div className="form-group">
												<label htmlFor="exampleFormControlFile18">Carga una imagen</label>
												<input
													type="file"
													className="form-control-file"
													id="exampleFormControlFile18"
													onChange={uploadImage}
												/>
												{loading ? <h3>Cargando...</h3> : <img src={image} style={styles} />}
											</div>
										</form>

										<button
											className="btn btn-primary"
											onClick={() => {
												toggleShow4();
												setSend(true);
											}}>
											Editar
										</button>
									</form>
									<div className="row">
										<Row>
											<Col>
												<Toast
													show={show4}
													onClose={() => setShow3(false)}
													delay={10000}
													autohide
													style={{
														position: "absolute",
														bottom: 45,
														left: 450,
														width: "350px"
													}}>
													<Toast.Header>
														<img
															src={Logo}
															className="rounded mr-2"
															alt=""
															height="30px"
															width="30px"
														/>
														<strong className="mr-auto">
															Ángeles de los animales Santa Rosa
														</strong>
													</Toast.Header>
													<Toast.Body className="text-center"> ¡Mascota editada!</Toast.Body>
												</Toast>
											</Col>
										</Row>
									</div>
								</Modal.Body>
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Cerrar
									</Button>
								</Modal.Footer>
							</Modal>
						</div>
					);
				})}

				<Button variant="primary" onClick={handleShow}>
					Agregar nueva mascota
				</Button>

				<Modal show={show} onHide={handleClose} size="lg">
					<Modal.Header closeButton>
						<Modal.Title>Agregar nueva mascota</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Nombre de la mascota</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={e => setName(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect1">Tipo de mascota</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlSelect1"
									aria-describedby="emailHelp"
									onChange={e => setTypepet(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect12">Sexo de la mascota</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlSelect12"
									aria-describedby="emailHelp"
									onChange={e => setSex(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail13">Edad</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlSelect13"
									aria-describedby="emailHelp"
									onChange={e => setAge(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect14">Comportamiento</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlSelect14"
									aria-describedby="emailHelp"
									onChange={e => setBehaviour(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect15">Raza</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlSelect15"
									aria-describedby="emailHelp"
									onChange={e => setRaza(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect17">Tamaño</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlSelect17"
									aria-describedby="emailHelp"
									onChange={e => setSize(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect18">Historia</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlSelect18"
									aria-describedby="emailHelp"
									onChange={e => setHistory(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect19">Más información</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlSelect19"
									aria-describedby="emailHelp"
									onChange={e => setOtro(e.target.value)}
								/>
							</div>
							<form>
								<div className="form-group">
									<label htmlFor="exampleFormControlSelect20">Carga una imagen</label>
									<input
										type="file"
										className="form-control-file"
										id="exampleFormControlSelect20"
										onChange={uploadImage}
									/>
									{loading ? <h3>Cargando...</h3> : <img src={image} style={styles} />}
								</div>
							</form>

							<button
								id="test"
								className="regularButtonLoginDisabled"
								onClick={() => {
									createPet();
									toggleShow3();
								}}>
								Agregar
							</button>
						</form>
						<div className="row">
							<Row>
								<Col>
									<Toast
										show={show3}
										onClose={() => setShow3(false)}
										delay={10000}
										autohide
										style={{
											position: "absolute",
											bottom: 45,
											left: 450,
											width: "350px"
										}}>
										<Toast.Header>
											<img
												src={Logo}
												className="rounded mr-2"
												alt=""
												height="30px"
												width="30px"
											/>
											<strong className="mr-auto">Ángeles de los animales Santa Rosa</strong>
										</Toast.Header>
										<Toast.Body className="text-center"> ¡Mascota agregada!</Toast.Body>
									</Toast>
								</Col>
							</Row>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Cerrar
						</Button>
					</Modal.Footer>
				</Modal>
			</div>

			<br />
		</div>
	);
}
