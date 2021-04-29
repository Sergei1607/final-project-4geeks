import React, { Component, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let colorStyle = {
		backgroundColor: "#f6b26b"
	};
	let titleStyle = {
		marginLeft: "50px",
		color: "white"
	};

	let imageStyle = {
		marginLeft: "20px"
	};

	let buttonStyle = {
		padding: "5px",
		margin: "10px",
		borderRadius: "10%",
		backgroundColor: "#27A1C6"
	};

	return (
		<div className="container-flux">
			<nav className="navbar navbar-light mb-3" style={colorStyle}>
				<Link to="/">
					<img src={Logo} height="75px" width="80px" style={imageStyle} />
				</Link>
				<span className="navbar-brand mb-0 h1" style={titleStyle}>
					Ángeles de los Animales Santa Rosa
				</span>
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
					{() => {
						if (store.user != "[]") {
							console.log("hi");
						}
					}}
				</div>
			</nav>
		</div>
	);
};
