import { useState } from "react";
import BaseURL from "../util";

const UpdateRemoveAct = (props) => {
	const [openEdit, setOpenEdit] = useState("false");
	const [count, setCount] = useState("");
	const [duration, setDuration] = useState("");
	const routineActivityId = props.activity.routineActivityId;

	const token = props.user.token;

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(
			`${BaseURL}/routine_activities/${routineActivityId}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token} `,
				},
				body: JSON.stringify({
					count: `${count}`,
					duration: `${duration}`,
				}),
			}
		);
		const info = await response.json();
		// console.log(info);

		if (info.error) {
			props.setErrorMessage(info.message);
		}
		setCount("");
		setDuration("");
	};

	const handleDelete = async (routineActivityId) => {
		const response = await fetch(
			`${BaseURL}/routine_activities/${routineActivityId}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);
		const info = await response.json();
		// console.log(info);

		if (info.error) {
			props.setErrorMessage(info.message);
		}
	};

	return (
		<>
			<button
				onClick={() => {
					setOpenEdit(!openEdit);
				}}
				className="actCardButton"
			>
				Edit or Remove
			</button>

			<div className={openEdit ? "open" : null}>
				<form onSubmit={handleSubmit} className="updateForm">
					<h3>Update Activity</h3>
					<label>Count:</label>
					<input
						type="number"
						placeholder="0"
						min="0"
						value={count}
						onChange={(e) => setCount(e.target.value)}
						required
					/>
					<label>Duration:</label>
					<input
						type="number"
						placeholder="0"
						min="0"
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
						required
					/>
					<button className="actCardButton" type="submit">
						Submit
					</button>
					<p>or</p>
					<button
						onClick={(e) => {
							handleDelete(routineActivityId);
						}}
						className="deleteActivity"
					>
						Remove
					</button>
				</form>
			</div>
		</>
	);
};

export default UpdateRemoveAct;
