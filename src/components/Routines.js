import RenderRoutines from "./RenderRoutines";

const Routines = (props) => {
	return (
		<div className="container">
			<div className="cardDisplay">
				<RenderRoutines
					routines={props.routines}
					setRoutines={props.setRoutines}
					getRoutines={props.getRoutines}
				/>
			</div>
		</div>
	);
};

export default Routines;
