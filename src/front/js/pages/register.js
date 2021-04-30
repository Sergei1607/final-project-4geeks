import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import quienes from "../../img/quienes.png";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);

	let registerstyle = {
		marginTop: "50px",
		backgroundImage: `url(${quienes})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "550px"
	};
	let textstyle = {
		fontSize: "60px",
		marginTop: "70px",
		color: "white"
	};

	let CreateUserContainer = {
		Position: "absolute",
		width: "100%",
		height: "100%",
		display: "flex"
	};
	return (
		<div className="row justify-content-center" style={registerstyle}>
			<div className="text-center" style={textstyle}>
				<h1>Registro</h1>
			</div>
			<div className="CreateUserContainer" style={CreateUserContainer}>
				<div className="ItemComponent">
					<label className="LabelItemComponent">User</label>
				</div>
				<div className="inputContainer">
					<input id="username" placeholder name="username" type="text"></input>
				</div>

				<div className="ItemComponent">
					<label className="LabelItemComponent">First name</label>
				</div>
				<div className="inputContainer">
					<input id="firstname" placeholder name="firstname" type="text"></input>
				</div>

				<div className="ItemComponent">
					<label className="LabelItemComponent">Last name</label>
				</div>
				<div className="inputContainer">
					<input id="lastname" placeholder name="lastname" type="text"></input>
				</div>

				<div className="ItemComponent">
					<label className="LabelItemComponent">Password</label>
				</div>
				<div className="inputContainer">
					<input id="password" placeholder name="password" type="password"></input>
				</div>

				<div className="ItemComponent">
					<label className="LabelItemComponent">Repeat Password</label>
				</div>
				<div className="inputContainer">
					<input
						id="passwordAgain"
						placeholder
						name="passwordAgain"
						type="password"
						className="regularStyle"></input>
				</div>

				<div className="regularButtonLoginContainer">
					<Link to="/">
						<button className="regularButtonLoginContainer">Sing Up</button>
					</Link>
				</div>

				<div className="ItemComponent">
					<Link to="/login">
						<label className="LabelItemComponent">I want to Sing In </label>
					</Link>
				</div>
			</div>
		</div>
	);
};
