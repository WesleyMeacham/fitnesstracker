import NewRoutForm from "./NewRoutFrom";
import UpdateRemoveAct from "./UpdateRemoveAct";
import UpdateRoutine from "./UpdateRoutine";

const MyRoutines = (props) => {
	const routines = props.routines;
	const user = props.user;

	return (
		<>
			<div className="container">
				<NewRoutForm user={user} setErrorMessage={props.setErrorMessage} />
				<div className="cardDisplay">
					{routines
						.filter((routine) => routine.creatorId === user.id)
						.map((filteredRoutine) => (
							<div className="routCard" key={filteredRoutine.id}>
								{/* {console.log(filteredRoutine)} */}
								<h3>{filteredRoutine.name} </h3>
								<p>Goal: {filteredRoutine.goal} </p>
								<p>Created By: {filteredRoutine.creatorName} </p>
								<div>
									Activities Include:
									{filteredRoutine.activities.map((activity) => (
										<div className="actCard" key={activity.id}>
											<h5>{activity.name} </h5>
											<p>{activity.description} </p>
											<p>Count: {activity.count}</p>
											<p>Duration: {activity.duration}</p>
											<UpdateRemoveAct
												user={user}
												activity={activity}
												setRoutines={props.setRoutines}
												getRoutines={props.getRoutines}
												setErrorMessage={props.setErrorMessage}
											/>
										</div>
									))}
								</div>
								<UpdateRoutine
									user={user}
									routineId={filteredRoutine.id}
									routines={routines}
									setRoutines={props.setRoutines}
									getRoutines={props.getRoutines}
									activities={props.activities}
									setErrorMessage={props.setErrorMessage}
								/>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default MyRoutines;
