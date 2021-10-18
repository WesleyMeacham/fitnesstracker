import "./App.css";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Activities from "./components/Activities";
import Routines from "./components/Routines";
import MyRoutines from "./components/MyRoutines";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import BaseURL from "./util";
// import { useEffect, useState } from "react";
// import BaseURL from "./util";

function App() {
	const [user, setUser] = useState(null);
	const [activities, setActivities] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	const [routines, setRoutines] = useState([]);
	// const [myRoutines, setMyRoutines] = useState([]);

	useEffect(() => {
		const getActivites = async () => {
			const response = await fetch(`${BaseURL}/activities`, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			const info = await response.json();
			setActivities(info);
		};
		getActivites();
	}, [activities]);

	useEffect(() => {
		const getRoutines = async () => {
			const response = await fetch(`${BaseURL}/routines`, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			const info = await response.json();
			setRoutines(info);
		};

		getRoutines();
	}, [routines]);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			return setUser(null);
		}
		const fetchUser = async () => {
			const response = await fetch(`${BaseURL}/users/me`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});
			const info = await response.json();
			setUser({ id: info.id, username: info.username, token });
		};
		fetchUser();
	}, []);
	// console.log(user);

	// The Return renders the Navigation Bar and the individual paths for each page.
	return (
		<>
			<NavBar setUser={setUser} user={user} />

			<Route exact path="/">
				<Home user={user} />
			</Route>

			<Route path="/activities">
				<Activities
					user={user}
					activities={activities}
					setActivities={setActivities}
				/>
			</Route>

			<Route path="/routines">
				<Routines user={user} routines={routines} setRoutines={setRoutines} />
			</Route>

			<Route path="/myroutines">
				<MyRoutines
					user={user}
					routines={routines}
					setRoutines={setRoutines}
					setErrorMessage={setErrorMessage}
					activities={activities}
				/>
			</Route>

			<Route path="/login">
				<Login
					setUser={setUser}
					errorMessage={errorMessage}
					setErrorMessage={setErrorMessage}
				/>
			</Route>

			<Route path="/register">
				<Register
					setUser={setUser}
					errorMessage={errorMessage}
					setErrorMessage={setErrorMessage}
				/>
			</Route>
		</>
	);
}

export default App;
