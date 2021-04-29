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
			user: []
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

				fetch("https://3001-sapphire-ladybug-qg2ql9ff.ws-us03.gitpod.io/api/get_caninos", requestOptions)
					.then(response => response.json())
					.then(results => setStore({ perros: results }))
					.catch(error => console.log("error", error));

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch("https://3001-sapphire-ladybug-qg2ql9ff.ws-us03.gitpod.io/api/get_felinos", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ gatos: result }))
					.catch(error => console.log("error", error));
			},

			login: () => {
				var store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					password: "12345",
					username: "Sergei16"
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-sapphire-ladybug-qg2ql9ff.ws-us03.gitpod.io/api/login", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ user: result.user.user_adm }))
					.then(console.log(store.user))
					.catch(error => console.log("error", error));
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;
