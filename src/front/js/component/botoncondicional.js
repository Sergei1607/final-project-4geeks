import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

let buttonStyle = { marginBottom: "20px", marginTop: "20px" };

console.log(sessionStorage.getItem("token"));

export function Botoncondicional() {
	const { store, actions } = useContext(Context);

	if (sessionStorage.getItem("token") != null) {
		return (
			<Link to="/adoptform">
				<button type="button" disabled={false} className="btn btn-primary" style={buttonStyle}>
					Adopción
				</button>
			</Link>
		);
	} else {
	}
	return (
		<Link to="/adoptform">
			<button
				type="button"
				disabled={true}
				className="btn btn-primary"
				style={buttonStyle}
				onClick={() => {
					alert("hi");
				}}>
				Adopción
			</button>
		</Link>
	);
}
