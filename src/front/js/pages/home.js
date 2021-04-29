import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo.png";
import adoptar from "../../img/adoptar.png";
import educacion from "../../img/educacion.png";
import castrar from "../../img/castrar.png";
import quienes from "../../img/quienes.png";
import "../../styles/home.scss";
import { Carousel } from "react-bootstrap";
import { DogCards } from "../component/dogcards";
import { CatCards } from "../component/catcards";
import { Blogs } from "../component/blogs";

export const Home = () => {
	const { store, actions } = useContext(Context);

	let backgroundstyle1 = {
		backgroundColor: "#005073",
		marginTop: "30px"
	};

	let backgroundstyle = {
		backgroundColor: "rgb(180, 250, 255)",
		marginTop: "20px"
	};

	let over = {
		overflowX: "scroll",
		flexWrap: "nowrap",
		marginBottom: "20px",
		backgroundColor: "rgb(180, 250, 255  )"
	};

	let separationWITHIMAGEstyle = {
		marginTop: "50px",
		backgroundImage: `url(${quienes})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "550px"
	};

	let h1style = {
		fontSize: "60px",
		marginTop: "70px",
		color: "white"
	};

	let h1style2 = {
		fontSize: "50px",
		marginBottom: "20px",
		marginTop: "20px",
		color: "white"
	};

	let h2style = {
		fontSize: "40px",
		marginBottom: "30px",
		marginTop: "20px"
	};

	let pstyle = {
		paddingLeft: "80px",
		paddingRight: "80px",
		fontSize: "20px",
		marginTop: "-140px",
		color: "white"
	};

	return (
		<div className="container">
			<div className="row bg-danger">
				<Carousel fade>
					<Carousel.Item interval={4000}>
						<img className="d-block w-100" src={adoptar} alt="First slide" height="500px" width="400px" />
					</Carousel.Item>
					<Carousel.Item interval={4000}>
						<img
							className="d-block w-100"
							src={educacion}
							alt="Second slide"
							height="500px"
							width="400px"
						/>
					</Carousel.Item>
					<Carousel.Item interval={4000}>
						<img className="d-block w-100" src={castrar} alt="Third slide" height="500px" width="400px" />
					</Carousel.Item>
				</Carousel>
			</div>
			<div className="row justify-content-center" style={separationWITHIMAGEstyle}>
				<h1 className="text-center" style={h1style}>
					¿Qué somos?
				</h1>
				<p className=" text-center" style={pstyle}>
					Ángeles de los animales Santa Rosa es un proyecto que surgió a nivel comunal en noviembre del 2016.
					Busca promover el bienestar de los animales y ayudar a los que se encuentren en estado de
					vulnerabilidad (castraciones, adopciones, tratamientos y recuperación veterinaria). Se trabaja y se
					generan fondos económicos por medio de actividades extraordinarias como: rifas, bingos, ventas de
					garaje y donaciones. Se cuentan con casas cunas, las cuales sirven para resguardar a los animales
					mientras se les busca un hogar permanente. Actualmente se ha extendido a otras comunidades y se
					brinda apoyo en el control de la sobrepoblación en algunos lugares (precarios, centros comerciales,
					instituciones públicas y privadas, urbanizaciones etc…)
				</p>
			</div>
			<div className="row justify-content-center" style={backgroundstyle1}>
				<h1 className="text-center" style={h1style2}>
					{" "}
					Mascotas en adopción
				</h1>
			</div>
			<div className="row justify-content-center" style={backgroundstyle}>
				<h2 className="text-center" style={h2style}>
					Gatos
				</h2>
			</div>
			<div className="row overflow-scroll pb-5" style={over}>
				{store.gatos.map((item, index) => {
					return <CatCards key={index} name={item.name} age={item.age} sex={item.sex} index={index} />;
				})}
			</div>
			<div className="row justify-content-center" style={backgroundstyle}>
				<h2 className="text-center" style={h2style}>
					{" "}
					Perros
				</h2>
			</div>
			<div className="row overflow-scroll pb-5" style={over}>
				{store.perros.map((item, index) => {
					return <DogCards key={index} name={item.name} age={item.age} sex={item.sex} index={index} />;
				})}
			</div>
			<div className="row justify-content-center">
				<button onClick={actions.login}>Click</button>
			</div>
		</div>
	);
};
