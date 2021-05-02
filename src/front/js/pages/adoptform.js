import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import foto from "../../img/mascotas.jpg";
import "../../styles/adoptform.scss";

export const Adoptform = () => {
	const { store, actions } = useContext(Context);

	let backgroundStyle = {
		backgroundImage: `url(${foto})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover"
	};
	return (
		<div className="container text-center" style={backgroundStyle}>
			<div>
				<div className="col h-50 w-50 mx-auto mb-3 bg-danger">
					<form>
						<div className="form-group">
							<div className="form-group">
								<label htmlFor="validation01">First name</label>
								<input
									type="text"
									className="form-control is-valid"
									id="validation01"
									placeholder="First name"
									value="Mark"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="validation02">City</label>
								<input
									type="text"
									className="form-control is-invalid"
									id="validation02"
									placeholder="City"
									required
								/>
							</div>
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
							<small id="emailHelp" className="form-text text-muted">
								your email with anyone else.
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>
						<div className="form-group form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
							<label className="form-check-label" htmlFor="exampleCheck1">
								Check me out
							</label>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
