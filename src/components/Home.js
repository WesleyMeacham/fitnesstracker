const Home = (props) => {
	if (props.user) {
		return (
			<>
				<div className="container">Welcome {props.user.username}</div>
			</>
		);
	} else {
		return (
			<>
				<div className="container">Welcome</div>
			</>
		);
	}
};

export default Home;
