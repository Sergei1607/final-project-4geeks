import React, { Component } from "react";

export const Footer = () => {
	let colorStyle = {
		backgroundColor: "#f6b26b",
		height: "60px"
	};

	let iconStyle = {
		color: "#27A1C6"
	};

	let fontStyle = {
		fontSize: "20px"
	};

	let fontStyle2 = {
		fontSize: "20px",
		marginTop: "4px"
	};

	return (
		<div className="container-flux">
			<div className="row " style={colorStyle}>
				<div className="col-4 d-flex justify-content-center align-items-center">
					<p className="mt-2" style={fontStyle}>
						Correo: angelesdelosanimales@gmail.com
					</p>
				</div>
				<div className="col-4 d-flex justify-content-center" style={fontStyle2}>
					<p className="mt-2">Teléfono: 8695-15-36</p>
				</div>
				<div className="col-4 d-flex justify-content-end align-items-center">
					<a href="https://www.facebook.com/%C3%81ngeles-de-los-animales-Santa-Rosa-1685466578449779/">
						<i className="fab fa-facebook fa-2x px-2 " style={iconStyle} />
					</a>
					<a href="https://www.instagram.com/angelesdelosanimales_cr/">
						<i className="fab fa-instagram fa-2x px-2 mr-5" style={iconStyle} />
					</a>
				</div>
			</div>
		</div>
	);
};
