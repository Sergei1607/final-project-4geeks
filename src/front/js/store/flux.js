const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			perros: [],
			gatos: [],
			mascotas: [],
			user: [],
			adoptions: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomedata: () => {
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch("https://3001-purple-cattle-f93fcd45.ws-us04.gitpod.io/api/get_caninos", requestOptions)
					.then(response => response.json())
					.then(results => setStore({ perros: results }))
					.catch(error => console.log("error", error));

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch("https://3001-purple-cattle-f93fcd45.ws-us04.gitpod.io/api/get_felinos", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ gatos: result }))
					.catch(error => console.log("error", error));

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://3001-purple-cattle-f93fcd45.ws-us04.gitpod.io/api/pet", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ mascotas: result }))
					.catch(error => console.log("error", error));

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				fetch("https://3001-purple-cattle-f93fcd45.ws-us04.gitpod.io/api/adopt", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ adoptions: result }))
					.catch(error => console.log("error", error));
			},

			deletepet: id => {
				var raw = "";

				var requestOptions = {
					method: "DELETE",
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-purple-cattle-f93fcd45.ws-us04.gitpod.io/api/pet/" + id, requestOptions)
					.then(response => response.json())
					.catch(error => console.log("error", error));
			},

			login: (contraseña, usuario) => {
				var store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					password: contraseña,
					username: usuario
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-purple-cattle-f93fcd45.ws-us04.gitpod.io/api/login", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ user: result.user }))
					//.then(result => sessionStorage.setItem("token", data.token))
					.then(result => console.log(store.user))
					.catch(error => console.log("error", error));
			},
			getout: () => {
				setStore({ user: "0" });
			}
		}
	};
};

export default getState;
