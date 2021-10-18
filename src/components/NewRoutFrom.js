import { useState } from "react";
import BaseURL from "../util";

const NewRoutForm = (props) => {
	const [name, setName] = useState("");
	const [goal, setGoal] = useState("");
	const [isPublic, setIsPublic] = useState(true);
	// console.log(props);

	if (!props.user) {
		return (
			<div className="loading">
				<h1>Loading!</h1>
			</div>
		);
	} else {
		const token = props.user.token;

		const handleChange = (e) => {
			setIsPublic(e.target.value);
		};

		const submitHandler = async (e) => {
			e.preventDefault();
			const response = await fetch(`${BaseURL}/routines`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token} `,
				},
				body: JSON.stringify({
					name: `${name}`,
					goal: `${goal}`,
					isPublic: `${isPublic}`,
				}),
			});
			const info = await response.json();

			if (info.error) {
				props.setErrorMessage(info.message);
			}

			console.log(info);
			// getActivites();
			setName("");
			setGoal("");
			setIsPublic(true);
		};

		return (
			<>
				<form onSubmit={submitHandler} className="actForm">
					<h1>Create a New Routine</h1>
					<input
						type="text"
						placeholder="Routine Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<input
						type="text"
						placeholder="Write a Short Description of your Activity"
						value={goal}
						onChange={(e) => setGoal(e.target.value)}
						required
					/>

					<select value={isPublic} onChange={handleChange}>
						<option value={true}>Public</option>
						<option value={false}>Private</option>
					</select>

					<button>Submit</button>
				</form>
				<p>{props.errorMessage}</p>
			</>
		);
	}
};

export default NewRoutForm;
