import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

let buttonStyle = {
	padding: "5px",
	marginLeft: "10px",
	borderRadius: "10%",
	backgroundColor: "#27A1C6",
	width: "100px"
};

let favoritestyle = {
	backgroundColor: "white",
	marginLeft: "5px",
	marginRight: "5px",
	borderRadius: "25%",
	color: "black"
};

let textStyle = {
	color: "white",
	marginTop: "17px",
	fontSize: "20px"
};

console.log(sessionStorage.getItem("token"));

export function Condicional() {
	const { store, actions } = useContext(Context);

	let counter = 0;
	function count() {
		for (let i in store.adoptions) {
			counter++;
		}
		return counter;
	}

	if ((sessionStorage.getItem("token") != null) & (store.user.user_adm === null)) {
		return (
			<div className="ml-auto">
				<span style={textStyle}>{"¡Hola " + store.user.username + "!"}</span>
				<button className="btn btn-primary" style={buttonStyle} onClick={actions.getout}>
					Salir
				</button>
			</div>
		);
	} else if ((sessionStorage.getItem("token") != null) & (sessionStorage.getItem("token") != "undefined")) {
		return (
			<div className="ml-auto">
				<Link to="/PetCRUD">
					<button className="btn btn-primary" style={buttonStyle}>
						Administrar
					</button>
				</Link>
				<Link to="/adoptions">
					<button className="btn btn-primary" style={buttonStyle}>
						Solicitudes
						<span style={favoritestyle}>{count()}</span>
					</button>
				</Link>
				<button className="btn btn-primary" style={buttonStyle} onClick={actions.getout}>
					Salir
				</button>
			</div>
		);
	} else {
		return (
			<div className="ml-auto">
				<Link to="/register">
					<button className="btn btn-primary" style={buttonStyle}>
						Registrarse
					</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-primary" style={buttonStyle}>
						Acceder
					</button>
				</Link>
			</div>
		);
	}
}
