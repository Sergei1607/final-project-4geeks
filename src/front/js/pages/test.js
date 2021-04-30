import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export function Test() {
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
		<form>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Nombre</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
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
					placeholder="Enter email"
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
					placeholder="Enter email"
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
					placeholder="Enter email"
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
					placeholder="Enter email"
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
					placeholder="Enter email"
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
					placeholder="Enter email"
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
					placeholder="Enter email"
					onChange={e => setHistory(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Otro</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
					onChange={e => setOtro(e.target.value)}
				/>
			</div>
			<form>
				<div className="form-group">
					<label htmlFor="exampleFormControlFile1">Example file input</label>
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
				Submit
			</button>
		</form>
	);
}
