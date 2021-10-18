import NewActForm from "./NewActForm";
import RenderActivities from "./RenderActivities";

const Activities = (props) => {
	if (!props.user) {
		return (
			<div className="container">
				<div className="cardDisplay">
					<RenderActivities
						setActivities={props.setActivities}
						activities={props.activities}
					/>
				</div>
			</div>
		);
	} else {
		const token = props.user.token;
		return (
			<>
				<div className="container">
					{props.user && (
						<NewActForm token={token} setActivities={props.setActivities} />
					)}

					<div className="cardDisplay">
						<RenderActivities
							setActivities={props.setActivities}
							activities={props.activities}
						/>
					</div>
				</div>
			</>
		);
	}
};

export default Activities;
