import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo.png";

export function CatCards() {
	const { store, actions } = useContext(Context);

	let backgrounstyle = {
		backgroundColor: "lightgrey"
	};

	let buttonstyle = {
		backgroundColor: "#00BCEB",
		borderRadius: "10%"
	};

	return (
		<div className="col-3">
			<div className="card">
				<img className="card-img-top" src={Logo} alt="Card image cap" />
				<div className="card-body" style={backgrounstyle}>
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Edad : 1 año</p>
					<Link to="/petdetail/1">
						<button className="btn btn-primary" style={buttonstyle}>
							Conocer más
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
