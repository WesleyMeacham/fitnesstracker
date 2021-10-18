const RenderRoutines = (props) => {
	const routines = props.routines;

	return (
		<>
			{routines.map((routine) => (
				<div className="routCard" key={routine.id}>
					<h3>{routine.name} </h3>
					<p>Goal: {routine.goal} </p>
					<p>Created By: {routine.creatorName} </p>
					<div>
						Activities Include:
						{routine.activities.map((activity) => (
							<div className="actCard" key={activity.id}>
								<h5>{activity.name} </h5>
								<p>{activity.description} </p>
							</div>
						))}
					</div>
				</div>
			))}
		</>
	);
};

export default RenderRoutines;
