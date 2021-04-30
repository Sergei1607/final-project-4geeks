import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dogdetail = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-sm">
					<img
						width={400}
						height={300}
						className="align-self-center mr-3"
						src={store.perros[params.theid].image}
						alt="Generic placeholder"
					/>
				</div>
				<div className="col-sm text-center">
					<h5>{store.perros[params.theid].name}</h5>
					<p>{store.perros[params.theid].history}</p>
					<p>{store.perros[params.theid].other}</p>
				</div>
				<table className="table m-3">
					<thead>
						<tr>
							<th scope="col">Sexo</th>
							<th scope="col">Edad</th>
							<th scope="col">Raza</th>
							<th scope="col">Comportamiento</th>
							<th scope="col">Tamaño</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{/* <th scope="row">1</th> */}
							<td>{store.perros[params.theid].sex}</td>
							<td>{store.perros[params.theid].age}</td>
							<td>{store.perros[params.theid].breed}</td>
							<td>{store.perros[params.theid].behaviour}</td>
							<td>{store.perros[params.theid].size}</td>
						</tr>
					</tbody>
				</table>

				<div className="container">
					<div className="row">
						<div className="col-9">
							<Link to="/">
								<button type="button" className="btn btn-primary mr-2">
									Regresar
								</button>
							</Link>
						</div>
						<div className="col-3 d-flex justify-content-end">
							<Link to="/adoptform">
								<button type="button" className="btn btn-primary ">
									Formulario de adopción
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Dogdetail.propTypes = {
	match: PropTypes.object
};
