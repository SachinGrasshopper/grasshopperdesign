import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
	return (
		<nav>
			<div className="container" style={{ height: 'inherit' }}>
				<NavLink to="/" className="left valign-wrapper" style={{ height: '100%' }}>
					<img
						src={process.env.PUBLIC_URL + '/assets/images/logo/logo.png'}
						alt="Company Logo"
						style={{ width: '100px' }}
					/>
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
