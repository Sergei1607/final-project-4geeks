import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import foto from "../../img/pet.jpg";
import "../../styles/adoptform.scss";

export const Adoptform = () => {
	const { store, actions } = useContext(Context);

	const [fullname, setFullname] = useState("");
	const [address, setAddress] = useState("");
	const [telephone, setTelephone] = useState("");
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [petname, setPetname] = useState("");

	let backgroundStyle = {
		backgroundImage: `url(${foto})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover"
	};

	let colorFondo = {
		background: "#00ffff",
		borderRadius: "10%"
	};

	let colorStyle = {
		backgroundColor: "#f6b26b",
		borderRadius: "30%"
	};

	function postAdoption() {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			full_name: fullname,
			address: address,
			telephone: telephone,
			mobile_phone: mobile,
			email: email,
			name_pet: petname
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch("https://3001-purple-cattle-f93fcd45.ws-us04.gitpod.io/api/adopt", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}
	return (
		<div className="container-fluid" style={backgroundStyle}>
			<div className="container justify-content-center">
				<div className="row">
					<div className="col-3" />
					<div className="col-6 mt-3 mb-3 p-5" style={colorFondo}>
						<h1 className="text-center">Formulario de Adopción</h1>
						<form>
							<div className="form-group">
								<label htmlFor="inputEmail4">Nombre completo</label>
								<input
									type="text"
									className="form-control"
									onChange={e => setFullname(e.target.value)}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="inputEmail3">Email</label>
								<input
									type="email"
									className="form-control"
									id="inputEmail3"
									placeholder="@"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="inputAddress1">Dirección</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress1"
									onChange={e => setAddress(e.target.value)}
								/>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputTelefono">Teléfono</label>
									<input
										type="text"
										className="form-control"
										id="inputTelefono"
										onChange={e => setTelephone(e.target.value)}
									/>
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="inputCelular">Celular</label>
									<input
										type="text"
										className="form-control"
										id="inputCelular"
										onChange={e => setMobile(e.target.value)}
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inlineFormCustomSelect">Mascota de interés</label>
									<select
										className="custom-select mr-sm-2"
										id="inlineFormCustomSelect"
										onChange={e => setPetname(e.target.value)}>
										<option selected>Elige una mascota </option>
										{store.mascotas.map((item, index) => {
											return <option key={index}>{item.name}</option>;
										})}
									</select>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="label">
									<b>
										El envío de este formulario es para contactar al interesado para un estudio
										previo
									</b>
								</label>
							</div>

							<div className="form-group">
								<div className="text-center">
									<button
										className="btn btn-primary"
										style={colorStyle}
										onClick={() => {
											postAdoption();
										}}>
										Enviar
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className="col-3" />
				</div>
			</div>
		</div>
	);
};
