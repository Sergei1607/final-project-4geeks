import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Petdetail = props => {
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
						src="https://vetsource.com/wp-content/uploads/2018/11/img-pet-adoption-101.jpg"
						alt="Generic placeholder"
					/>
				</div>
				<div className="col-sm text-center">
					<h5>Rocky</h5>
					<p>
						A proud world with a rich warrior culture, Mandalore is home to various clans united under
						Bo-Katan Kryze, wielder of the Darksaber.
					</p>
				</div>
				<table className="table m-3">
					<thead>
						<tr>
							<th scope="col">Nombre</th>
							<th scope="col">Raza</th>
							<th scope="col">Sexo</th>
							<th scope="col">Edad</th>
							<th scope="col">Peso</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{/* <th scope="row">1</th> */}
							<td>Rocky</td>
							<td>Boxer</td>
							<td>Macho</td>
							<td>2 años</td>
							<td>15 kg</td>
						</tr>
					</tbody>
				</table>
				<button type="button" href="#" className="btn btn-primary mr-2">
					Regresar
				</button>
				<button type="button" href="#" className="btn btn-primary ml-auto">
					Formulario de adopción
				</button>
			</div>
		</div>
	);
};

Petdetail.propTypes = {
	match: PropTypes.object
};
