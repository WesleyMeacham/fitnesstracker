import { Link } from "react-router-dom";

const NavBar = (props) => {
	const handleLogOut = () => {
		localStorage.removeItem("token");
		props.setUser(null);
	};
	return (
		<>
			<header>
				<div className="siteName">
					<h1 className="siteTitle">Fitness Tracker</h1>
				</div>
				<div className="navContainer">
					<Link to="/">
						<button className="navButtons">Home</button>
					</Link>
					<Link to="/activities">
						<button className="navButtons">Activities</button>
					</Link>
					<Link to="/routines">
						<button className="navButtons">Routines</button>
					</Link>

					{!props.user && (
						<>
							<Link to="/login">
								<button className="navButtons">Log In</button>
							</Link>
							<Link to="/register">
								<button className="navButtons">Register</button>
							</Link>
						</>
					)}

					{props.user && (
						<>
							<Link to="/myroutines">
								<button className="navButtons">My Routines </button>
							</Link>
							<Link onClick={handleLogOut} to="/">
								<button className="navButtons">Log Out</button>
							</Link>
						</>
					)}
				</div>
			</header>
		</>
	);
};

export default NavBar;
