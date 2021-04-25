import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo proyecto.jpeg";

export const Navbar = () => {
	let colorStyle = {
		backgroundColor: "#fbc381"
	};
	let titleStyle = {
		marginLeft: "50px"
	};

	let imageStyle = {
		marginLeft: "20px"
	};

	let buttonStyle = {
		padding: "5px",
		margin: "10px",
		borderRadius: "10%"
	};

	return (
		<div className="container-flux">
			<nav className="navbar navbar-light mb-3" style={colorStyle}>
				<Link to="/">
					<img src={Logo} height="70px" style={imageStyle} />
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
				</div>
			</nav>
		</div>
	);
};
