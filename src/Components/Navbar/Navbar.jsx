import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
	return (
		<nav>
			<div className="container">
				<NavLink to="/" className="left">
					<img src={process.env.PUBLIC_URL + '/assets/images/logo/logo.png'} alt="Company Logo" />
				</NavLink>

				<ul className="nav_menu right hide-on-med-and-down">
					<li>
						<NavLink to="/" activeClassName="active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/">Works</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
