import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo.png";

export function Blogs(props) {
	const { store, actions } = useContext(Context);

	let backgroundstyle = {
		backgroundColor: props.color,
		borderStyle: "solid",
		borderColor: "#005073"
	};

	let imagestyle = {
		borderStyle: "solid",
		borderColor: "#005073"
	};

	let size = { width: "1510px", marginLeft: "14px" };

	return (
		<div className="card mb-3" style={size}>
			<div className="row">
				<div className="col-md-3 " style={imagestyle}>
					<img className="card-img-top" src={props.image} alt="..." height="165px" width="260px" />
				</div>
				<div className="col-md-9">
					<div className="card-body" style={backgroundstyle}>
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">
							It is a long established fact that a reader will be distracted by the readable content of a
							page when looking at its layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters.
						</p>
						<p className="card-text">
							<small className="text-muted">Creado por: Katherine Jimenez</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

Blogs.propTypes = {
	color: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string
};
