import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo.png";

export function DogCards(props) {
	const { store, actions } = useContext(Context);

	let textstyle = {
		color: "black"
	};

	let backgrounstyle = {
		backgroundColor: "#F2F2F2"
	};

	let buttonstyle = {
		backgroundColor: "#00BCEB",
		borderRadius: "10%"
	};

	return (
		<div className="col-lg-3 col-sm-6">
			<div className="card">
				<img className="card-img-top" src={props.image} alt="Card image cap" height="300px" />
				<div className="card-body" style={backgrounstyle}>
					<h5 className="card-title" style={textstyle}>
						{props.name}
					</h5>
					<p className="card-text"> {"Edad: " + props.age}</p>
					<p className="card-text"> {"Sexo: " + props.sex}</p>

					<Link to={"/dogdetail/" + props.index}>
						<button className="btn btn-primary" style={buttonstyle}>
							Conocer más
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

DogCards.propTypes = {
	name: PropTypes.string,
	sex: PropTypes.string,
	age: PropTypes.string,
	history: PropTypes.string,
	behavior: PropTypes.string,
	breed: PropTypes.string,
	size: PropTypes.string,
	other: PropTypes.string,
	index: PropTypes.number,
	image: PropTypes.string
};
