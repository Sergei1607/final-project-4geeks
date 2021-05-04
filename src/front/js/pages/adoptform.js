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
	return (
		<div className="container-fluid" style={backgroundStyle}>
			<div className="container">
				<div className="row">
					<div className="col-3"></div>
					<div className="col-6 bg-danger">
						<h1>Formulario de Adopción</h1>
						<form>
							<div className="form-row">
								<div className="col">
									<label htmlFor="inputEmail4">Nombre</label>
									<input type="text" className="form-control" />
								</div>
								<div className="col">
									<label htmlFor="inputEmail4">Apellidos</label>
									<input type="text" className="form-control" />
								</div>
							</div>

							<div className="form-group">
								<label htmlFor="inputAddress">Email</label>
								<input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
							</div>
							<div className="form-group">
								<label htmlFor="inputAddress2">Dirección</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress1"
									placeholder="numero de calle o casa color"
								/>
							</div>
							<div className="form-row">
								<div className="form-group col-md-4">
									<label htmlFor="inputProvincia">Provincia</label>
									<input type="text" className="form-control" id="inputProvincia" />
								</div>
								<div className="form-group col-md-4">
									<label htmlFor="inputCanton">Cantón</label>
									<input type="text" className="form-control" id="inputCanton" />
								</div>
								<div className="form-group col-md-4">
									<label htmlFor="inputDistrito">Distrito</label>
									<input type="text" className="form-control" id="inputDistrito" />
								</div>
							</div>
							<div className="form-group">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" id="gridCheck" />
									<label className="form-check-label" htmlFor="gridCheck">
										Check me out
									</label>
								</div>
							</div>
							<button type="submit" className="btn btn-primary">
								Sign in
							</button>
						</form>
					</div>
					<div className="col-3"></div>
				</div>
			</div>

			{/* <div className="col h-90 w-50 mx-auto  bg-danger mb-5"></div> */}
		</div>
	);
};
