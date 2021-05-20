import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo.png";

export function CatCards(props) {
	const { store, actions } = useContext(Context);

	let backgrounstyle = {
		backgroundColor: "#F2F2F2"
	};

	let buttonstyle = {
		backgroundColor: "#00BCEB",
		borderRadius: "10%"
	};
	console.log(store.user);
	return (
		<div className="col-lg-3 col-sm-6">
			<div className="card" id="test">
				<img className="card-img-top" src={props.image} alt="Card image cap" height="300px" />
				<div className="card-body" style={backgrounstyle}>
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text"> {"Edad: " + props.age}</p>
					<p className="card-text"> {"Sexo: " + props.sex}</p>
					<Link to={"/catdetail/" + props.index}>
						<button className="btn btn-primary" style={buttonstyle}>
							Conocer más
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

CatCards.propTypes = {
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
