import { useState } from "react";
import BaseURL from "../util";

const UpdateRoutine = (props) => {
	// These two states are for opening and closing the Update Routine Form and the Add Activity to Routine Form.
	const [openUpdate, setOpenUpdate] = useState("false");
	const [openAddAct, setOpenAddAct] = useState("false");

	//These three states are for the PATCH fetch function
	const [name, setName] = useState("");
	const [goal, setGoal] = useState("");
	const [isPublic, setIsPublic] = useState(true);

	//These states are for the Add Activities to Routine Fetch
	const [count, setCount] = useState("");
	const [duration, setDuration] = useState("");
	const [activityId, setActivityId] = useState("");

	const routineId = props.routineId;
	const activities = props.activities;
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

		// const handleSetActId = (e) => {
		// 	setActivityId(e.target.value);
		// };

		const submitHandler = async (e) => {
			e.preventDefault();
			const response = await fetch(`${BaseURL}/routines/${routineId}`, {
				method: "PATCH",
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
			setName("");
			setGoal("");
		};

		const handleDelete = async (routineId) => {
			const response = await fetch(`${BaseURL}/routines/${routineId}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});
			const info = await response.json();
			// console.log(info);

			if (info.error) {
				props.setErrorMessage(info.message);
			}
		};

		const handleAddActSubmit = async (e) => {
			e.preventDefault();
			console.log(
				"activityId",
				activityId,
				"count",
				count,
				"duration",
				duration
			);

			const response = await fetch(
				`${BaseURL}/routines/${routineId}/activities`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						activityId: `${activityId}`,
						count: `${count}`,
						duration: `${duration}`,
					}),
				}
			);
			const info = await response.json();
			console.log(info);

			if (info.error) {
				props.setErrorMessage(info.message);
			}

			setCount("");
			setDuration("");
			e.target.reset();
		};

		return (
			<>
				<div className="editOrDelete">
					<button
						onClick={() => {
							setOpenUpdate(!openUpdate);
						}}
						className="updateRoutine"
					>
						Edit
					</button>
					<button
						onClick={() => {
							setOpenAddAct(!openAddAct);
						}}
						className="updateRoutine"
					>
						Add Activity
					</button>
					<button
						onClick={() => handleDelete(routineId)}
						className="deleteRoutine"
					>
						Delete
					</button>
				</div>

				<div className={openUpdate ? "open" : null}>
					<form onSubmit={submitHandler} className="updateForm">
						<h1>Edit Routine</h1>
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
				</div>

				<div className={openAddAct ? "open" : null}>
					<form onSubmit={handleAddActSubmit} className="updateForm">
						<h1>Add Activities to Routine</h1>
						<select
							className="selectAct"
							onChange={(e) => setActivityId(e.target.value)}
						>
							{activities.map((activity) => (
								<option key={activity.id} value={activity.id}>
									{activity.name}
								</option>
							))}
						</select>
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
						<button>Submit</button>
					</form>
					<p>{props.errorMessage}</p>
				</div>
			</>
		);
	}
};

export default UpdateRoutine;
