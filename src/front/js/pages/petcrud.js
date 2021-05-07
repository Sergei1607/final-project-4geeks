import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export function PetCRUD() {
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const { store, actions } = useContext(Context);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);
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

		fetch("https://3001-purple-cattle-f93fcd45.ws-us03.gitpod.io/api/pet", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}

	function editPet(id) {
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
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		console.log(raw, id);

		fetch("https://3001-purple-cattle-f93fcd45.ws-us03.gitpod.io/api/pet/" + id, requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}

	return (
		<div className="container">
			<div className="row">
				<div className="row d-flex align-items-center" style={over2}>
					<div className="col-2 text-center">
						<h4>Acción</h4>
					</div>
					<div className="col-2 text-center">
						<h4>Nombre</h4>
					</div>
					<div className="col-2 text-center">
						<h4>Tipo de mascota</h4>
					</div>
					<div className="col-2 text-center">
						<h4>Sexo</h4>
					</div>
					<div className="col-2 text-center">
						<h4>Raza</h4>
					</div>
					<div className="col-2 text-center">
						<h4>Tamaño</h4>
					</div>
					<div className="col-2 text-center">
						<h4>Comportamiento</h4>
					</div>
					<div className="col-2 text-center">
						<h4>Edad</h4>
					</div>
					<div className="col-2 text-center">
						<h4>Historia</h4>
					</div>
					<div className="col-2 text-center">
						<h4>Más información</h4>
					</div>
				</div>
				{store.mascotas.map((item, index) => {
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
											<label htmlFor="exampleInputEmail19">Edad</label>
											<input
												type="text"
												className="form-control"
												id="exampleInputEmail19"
												aria-describedby="emailHelp"
												onChange={e => setAge(e.target.value)}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputEmail13">Comportamiento</label>
											<input
												type="text"
												className="form-control"
												id="exampleInputEmail13"
												onChange={e => setBehaviour(e.target.value)}
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
												editPet(ids);
											}}>
											Editar
										</button>
									</form>
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

							<button className="btn btn-primary" onClick={createPet}>
								Agregar
							</button>
						</form>
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
