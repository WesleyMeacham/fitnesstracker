const RenderActivities = (props) => {
	const activities = props.activities;
	// console.log(props);

	return (
		<>
			{activities.map((activity) => (
				<div className="actCard" key={activity.id}>
					<h3>{activity.name}</h3>
					<p>{activity.description} </p>
				</div>
			))}
		</>
	);
};

export default RenderActivities;
