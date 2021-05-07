import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Adoptions = () => {
	const { store, actions } = useContext(Context);

	let over2 = {
		overflowX: "scroll",
		flexWrap: "nowrap",
		marginBottom: "20px",
		backgroundColor: "#005073",
		color: "white"
	};

	let iconStyle = {
		color: "#27A1C6"
	};

	let over = {
		overflowX: "scroll",
		flexWrap: "nowrap",
		marginBottom: "20px",
		backgroundColor: "rgb(180, 250, 255  )"
	};

	let containerStyle = {
		height: "1000px",
		marginTop: "10px"
	};

	return (
		<div className="container" style={containerStyle}>
			<div className="row d-flex align-items-center" style={over2}>
				<div className="col-2 text-center">
					<h4>Acción</h4>
				</div>
				<div className="col-2 text-center">
					<h4>Mascota</h4>
				</div>
				<div className="col-2 text-center">
					<h4>Nombre</h4>
				</div>
				<div className="col-2 text-center">
					<h4>Célular</h4>
				</div>
				<div className="col-2 text-center">
					<h4>Teléfono</h4>
				</div>
				<div className="col-2 text-center">
					<h4>Dirección</h4>
				</div>
				<div className="col-2 text-center">
					<h4>Email</h4>
				</div>
			</div>
			{store.adoptions.map((item, index) => {
				return (
					<div className="row d-flex align-items-center" style={over} key={index}>
						<div className="col-2 text-center">
							<i
								className="fas fa-trash fa-2x px-1"
								style={iconStyle}
								onClick={() => {
									actions.deletepet(item.id);
								}}
							/>
						</div>

						<div className="col-2 text-center">
							<h7>{item.name_pet}</h7>
						</div>
						<div className="col-2 text-center">
							<h7>{item.full_name}</h7>
						</div>
						<div className="col-2 text-center">
							<h7>{item.mobile_phone}</h7>
						</div>
						<div className="col-2 text-center">
							<h7>{item.telephone}</h7>
						</div>
						<div className="col-2 text-center">
							<h7>{item.address}</h7>
						</div>
						<div className="col-2 text-center">
							<h7>{item.email}</h7>
						</div>
					</div>
				);
			})}
		</div>
	);
};
