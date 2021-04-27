import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo.png";

export function CatCards() {
	const { store, actions } = useContext(Context);

	let backgrounstyle = {
		backgroundColor: "#f6b26b"
	};

	let buttonstyle = {
		backgroundColor: "#27A1C6",
		borderRadius: "10%"
	};

	return (
		<div className="col-3">
			<div className="card">
				<img className="card-img-top" src={Logo} alt="Card image cap" />
				<div className="card-body" style={backgrounstyle}>
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Edad : 1 año</p>
					<a href="#" className="btn btn-primary" style={buttonstyle}>
						Conocer más
					</a>
				</div>
			</div>
		</div>
	);
}
