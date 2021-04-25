import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/Logo proyecto.jpeg";
import "../../styles/home.scss";
import { Carousel } from "react-bootstrap";
import { DogCards } from "../component/dogcards";
import { Blogs } from "../component/blogs";

export const Home = () => {
	const { store, actions } = useContext(Context);

	let fontstyle = {
		fontSize: "20px"
	};

	let over = {
		overflowX: "scroll",
		flexWrap: "nowrap"
	};

	return (
		<div className="container">
			<div className="row bg-danger">
				<Carousel fade>
					<Carousel.Item interval={3000}>
						<img
							className="d-block w-100"
							src="https://vetsource.com/wp-content/uploads/2018/11/img-pet-adoption-101.jpg"
							alt="First slide"
							height="500px"
							width="400px"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img
							className="d-block w-100"
							src="https://images.squarespace-cdn.com/content/v1/5cd493f1185add0001e4670d/1558988155986-PY602J3JHUN77WUMVRXS/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/image-asset.jpeg?format=2500w"
							alt="Second slide"
							height="500px"
							width="400px"
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img
							className="d-block w-100"
							src="https://www.humanesocietymiami.org/wp-content/uploads/2020/04/Adopt-a-shelter-pet-today_dog-2000px.jpg"
							alt="Third slide"
							height="500px"
							width="400px"
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<div className="row justify-content-center bg-warning">
				<h1 className="text-center"> ¿Qué somos?</h1>
				<p className="text-center" style={fontstyle}>
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
			<div className="row justify-content-center bg-danger">
				<h1 className="text-center"> Perros</h1>
			</div>
			<div className="row overflow-scroll" style={over}>
				<DogCards />
				<DogCards />
				<DogCards />
				<DogCards />
				<DogCards />
				<DogCards />
			</div>
			<div className="row justify-content-center bg-danger">
				<h1 className="text-center"> Gatos</h1>
			</div>
			<div className="row overflow-scroll" style={over}>
				<DogCards />
				<DogCards />
				<DogCards />
				<DogCards />
				<DogCards />
				<DogCards />
			</div>
			<div className="row justify-content-center bg-danger">
				<h1 className="text-center"> Blogs</h1>
			</div>
			<div className="row justify-content-center bg-danger">
				<Blogs />
				<Blogs />
				<Blogs />
			</div>
		</div>
	);
};
