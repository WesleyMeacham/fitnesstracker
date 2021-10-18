import { useState } from "react";
import BaseURL from "../util";

const NewActForm = (props) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	// console.log(props);

	const token = props.token;

	const submitHandler = async (e) => {
		e.preventDefault();
		const response = await fetch(`${BaseURL}/activities`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token} `,
			},
			body: JSON.stringify({
				name: `${name}`,
				description: `${description}`,
			}),
		});
		const info = await response.json();

		if (info.error) {
			props.setErrorMessage(info.message);
		}

		console.log(info);
		setName("");
		setDescription("");
	};

	return (
		<>
			<form onSubmit={submitHandler} className="actForm">
				<h1>Create a New Activitiy</h1>
				<input
					type="text"
					placeholder="Activity Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<textarea
					cols="30"
					rows="5"
					placeholder="Write a Short Description of your Activity"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
				></textarea>
				<button>Submit</button>
			</form>
			<p>{props.errorMessage}</p>
		</>
	);
};

export default NewActForm;
