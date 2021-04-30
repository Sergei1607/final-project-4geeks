import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export function PetCRUD() {
	const [show, setShow] = useState(false);
	const { store, actions } = useContext(Context);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
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

		fetch("https://3001-emerald-unicorn-iacul3dd.ws-us04.gitpod.io/api/pet", requestOptions)
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
									<i className="fas fa-edit fa-2x px-1" style={iconStyle}></i>
								</span>
								<span>
									<i className="fas fa-trash fa-2x px-1" style={iconStyle}></i>
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
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Canino/Felino"
									onChange={e => setTypepet(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlSelect1">Sexo de la mascota</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Macho/Hembra"
									onChange={e => setSex(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Edad</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={e => setAge(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Comportamiento</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={e => setBehaviour(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Raza</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="SRD"
									onChange={e => setRaza(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Tamaño</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Pequeño/Mediano/Grande"
									onChange={e => setSize(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Historia</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={e => setHistory(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Más información</label>
								<input
									type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={e => setOtro(e.target.value)}
								/>
							</div>
							<form>
								<div className="form-group">
									<label htmlFor="exampleFormControlFile1">Carga una imagen</label>
									<input
										type="file"
										className="form-control-file"
										id="exampleFormControlFile1"
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
		</div>
	);
}
