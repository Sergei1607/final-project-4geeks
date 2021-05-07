import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import foto from "../../img/pet.jpg";
import "../../styles/adoptform.scss";

export const Adoptform = () => {
	const { store, actions } = useContext(Context);

	let backgroundStyle = {
		backgroundImage: `url(${foto})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover"
	};

	let colorFondo = {
		background: "#00ffff"
	};

	return (
		<div className="container-fluid" style={backgroundStyle}>
			<div className="container">
				<div className="row">
					<div className="col-3" />
					<div className="col-6 mt-3 mb-3" style={colorFondo}>
						<h1>Formulario de Adopción</h1>
						<form>
							<div className="form-group">
								<label htmlFor="inputEmail4">Nombre</label>
								<input type="text" className="form-control" />
							</div>

							<div className="form-group">
								<label htmlFor="inputAddress">Email</label>
								<input type="email" className="form-control" id="inputEmail3" placeholder="@" />
							</div>
							<div className="form-group">
								<label htmlFor="inputAddress2">Dirección</label>
								<input type="text" className="form-control" id="inputAddress1" />
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputTelefono">Telefono</label>
									<input type="text" className="form-control" id="inputProvincia" />
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="inputCelular">Celular</label>
									<input type="text" className="form-control" id="inputCelular" />
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputTelefono">Mascotas</label>
									<select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
										<option selected>Choose...</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
								{/* <div className="form-group col-md-6">
									<label htmlFor="inputTelefono">
										Nota: El envio de este formulario es para contactar al interesado para un
										estudio previo.{" "}
									</label>
								</div> */}
							</div>
							<div className="form-group">
								<label htmlFor="inputEmail4">
									<b>
										El envio de este formulario es para contactar al interesado para un estudio
										previo
									</b>
								</label>
							</div>

							<div className="form-group">
								<div className="text-center">
									<button type="submit" className="btn btn-primary">
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
