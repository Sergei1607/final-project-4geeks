import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

let buttonStyle = {
	padding: "5px",
	margin: "10px",
	borderRadius: "10%",
	backgroundColor: "#27A1C6"
};

export function Condicional() {
	const { store, actions } = useContext(Context);

	if (store.user.user_adm === "1") {
		return (
			<div className="ml-auto">
				<span>{"Hola " + store.user.username}</span>
				<Link to="/login">
					<button className="btn btn-primary" style={buttonStyle}>
						Administrar
					</button>
				</Link>
				<button className="btn btn-primary" style={buttonStyle} onClick={actions.getout}>
					Salir
				</button>
			</div>
		);
	} else if (store.user.user_adm === "2") {
		return (
			<div className="ml-auto">
				<span>{"Hola " + store.user.username}</span>
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
