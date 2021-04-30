import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Catdetail } from "./pages/catdetail";
import { Dogdetail } from "./pages/dogdetail";
import { Adoptform } from "./pages/adoptform";
import { Login } from "./pages/login.js";
import { Register } from "./pages/register";
import { PasswordRecovery } from "./pages/passwordrecovery";
import { PetCRUD } from "./pages/petcrud";
import { Test } from "./pages/test.js";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/dogdetail/:theid">
							<Dogdetail />
						</Route>
						<Route exact path="/catdetail/:theid">
							<Catdetail />
						</Route>
						<Route exact path="/adoptform">
							<Adoptform />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/passwordrecovery">
							<PasswordRecovery />
						</Route>
						<Route exact path="/PetCRUD">
							<PetCRUD />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
