import { Link } from "react-router-dom";

import Button from "./Button";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto h-100 ">
					
					
				</div>
			</div>
		</nav>
	);
};