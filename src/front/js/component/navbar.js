import React, { Component, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import { Context } from "../store/appContext";
import { Condicional } from "./condicional.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let colorStyle = {
		backgroundColor: "#f6b26b"
	};
	let titleStyle = {
		marginLeft: "50px",
		color: "white",
		fontSize: "2vw"
	};

	let imageStyle = {
		marginLeft: "20px"
	};

	let containerStyle = {
		width: "1915px"
	};

	return (
		<div className="container-flux" style={containerStyle}>
			<nav className="navbar navbar-expand-lg navbar-light" style={colorStyle}>
				<Link to="/">
					<img id="test" src={Logo} height="75px" width="80px" style={imageStyle} />
				</Link>
				<span className="navbar-brand mb-0 h1" style={titleStyle}>
					Ángeles de los Animales Santa Rosa
				</span>
				<div className="ml-auto">
					<Condicional />
				</div>
			</nav>
		</div>
	);
};
