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
			adoptions: [],
			user_recovery: []
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

				fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/get_caninos", requestOptions)
					.then(response => response.json())
					.then(results => setStore({ perros: results }))
					.catch(error => console.log("error", error));

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/get_felinos", requestOptions)
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

				fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/pet", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ mascotas: result }))
					.catch(error => console.log("error", error));

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/adopt", requestOptions)
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

				fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/pet/" + id, requestOptions)
					.then(response => response.json())
					.catch(error => console.log("error", error));
			},

			login: async (contraseña, usuario) => {
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

				await fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/login", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ user: result.user }))
					.then(result => console.log(store.user))
					.catch(error => console.log("error", error));
			},

			gettoken: async (contraseña, usuario) => {
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

				await fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/token", requestOptions)
					.then(response => response.json())
					.then(result => sessionStorage.setItem("token", result.token))
					.then(result => console.log(sessionStorage.getItem("token")))
					.catch(error => console.log("error", error));
			},

			getout: () => {
				sessionStorage.removeItem("token");
				window.location.reload(false);
			},

			user_recovery: email => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-red-narwhal-6swhjyze.ws-us04.gitpod.io/api/recovery", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ user_recovery: result.user }))
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
