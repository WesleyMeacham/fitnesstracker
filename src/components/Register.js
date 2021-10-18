import { useState } from "react";
import { useHistory } from "react-router";
import BaseURL from "../util";

const Register = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		props.setErrorMessage("");

		const response = await fetch(`${BaseURL}/users/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});
		const info = await response.json();
		console.log(info);

		if (info.error) {
			props.setErrorMessage(info.message);
		}
		console.log(info.token);
		localStorage.setItem("token", info.token);

		props.setUser({
			id: info.user.id,
			username: info.user.username,
			token: info.token,
		});

		history.push("/");
	};

	return (
		<>
			<div className="container">
				<form onSubmit={handleSubmit}>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Enter Username..."
						type="text"
					/>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter Password..."
						type="password"
					/>
					<button>Register</button>
				</form>
				<p>{props.errorMessage}</p>
			</div>
		</>
	);
};

export default Register;
