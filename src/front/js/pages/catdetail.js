import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import blue from "../../img/449940.jpg";
import { Botoncondicional } from "../component/botoncondicional";

export const Catdetail = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let nameStyle = { fontSize: "60px", marginTop: "100px", color: "#005073" };

	let warningStyle = { color: "#005073" };

	let columnStyle = { color: "#005073" };

	let textStyle = { fontSize: "20px", marginTop: "35px" };

	let rowStyle = { marginTop: "20px" };

	let buttonStyle = { marginBottom: "20px", marginTop: "20px" };

	let containerStyle = { height: "900px", backgroundImage: `url(${blue})` };

	let iconStyle = {
		color: "#27A1C6",
		marginBottom: "30px",
		marginTop: "20px"
	};

	return (
		<div style={containerStyle}>
			<div className="row justify-content-center" style={containerStyle}>
				<div className="container mt-5 mb-5">
					<div className="row">
						<div className="col-lg-6  col-md-6 col-sm-6">
							<img
								width={500}
								height={500}
								className="align-self-center mr-3 border border-info rounded-3 rounded-bottom"
								src={store.gatos[params.theid].image}
								alt="Generic placeholder"
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 d-sm-none d-md-block text-center">
							<h5 style={nameStyle}>
								<i className="fas fa-paw mr-5" id="changecolor" style={iconStyle} />
								<u>{store.gatos[params.theid].name}</u>
							</h5>
							<p style={textStyle}>{store.gatos[params.theid].history}</p>
							<p style={textStyle}>{store.gatos[params.theid].other}</p>
						</div>

						<div className="container mt-5">
							<div className="row d-flex align-items-center" style={columnStyle}>
								<div className="col-lg-2 col-sm-2 text-center text-center">
									<h4>Nombre</h4>
								</div>
								<div className="col-lg-2 col-sm-2 text-center">
									<h4>Sexo</h4>
								</div>
								<div className="col-lg-2 col-sm-2 text-center">
									<h4>Edad</h4>
								</div>
								<div className="col-lg-2 col-sm-2 text-center">
									<h4>Comportamiento</h4>
								</div>
								<div className="col-lg-2 col-sm-2 text-center">
									<h4>Raza</h4>
								</div>
								<div className="col-lg-2 col-sm-2 text-center">
									<h4>Tamaño</h4>
								</div>
							</div>
							<hr className="my-4 bg-warning" />
							<div className="row d-flex align-items-center" style={rowStyle}>
								<div className="col-2 text-center">
									<h5>{store.gatos[params.theid].name}</h5>
								</div>
								<div className="col-2 text-center">
									<h5>{store.gatos[params.theid].sex}</h5>
								</div>
								<div className="col-2 text-center">
									<h5>{store.gatos[params.theid].age}</h5>
								</div>
								<div className="col-2 text-center">
									<h5>{store.gatos[params.theid].behaviour}</h5>
								</div>
								<div className="col-2 text-center">
									<h5>{store.gatos[params.theid].breed}</h5>
								</div>
								<div className="col-2 text-center">
									<h5>{store.gatos[params.theid].size}</h5>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-9">
									<Link to="/">
										<button type="button" className="btn btn-primary mr-2" style={buttonStyle}>
											Regresar
										</button>
									</Link>
								</div>
								<div className="col-3 d-flex justify-content-end">
									<Botoncondicional />
								</div>
							</div>
							<div className="row d-flex justify-content-center">
								<h5 style={warningStyle}>
									¡Por favor inicia sesión para acceder al formulario de adopción!
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Catdetail.propTypes = {
	match: PropTypes.object
};
