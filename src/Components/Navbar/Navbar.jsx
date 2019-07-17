import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { publicpath } from '../../Helpers/publicpath';

export default function Navbar() {
	return (
		<nav>
			<div className="container" style={{ height: 'inherit' }}>
				<NavLink to="/" className="left valign-wrapper" style={{ height: '100%' }}>
					<img
						src={publicpath + '/assets/images/logo/logo.png'}
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
					<li className="dropdown_btn">
						Works
						<ul className="nav_dropdown">
							<li>
								<NavLink to="/works/corporateidentity">Corporate Identity</NavLink>
							</li>
							<li>
								<NavLink to="/works/vehiclebranding">Vehicle Branding</NavLink>
							</li>
							<li>
								<NavLink to="/works/packaging">Packaging</NavLink>
							</li>
							<li>
								<NavLink to="/works/posters">Posters</NavLink>
							</li>
							<li>
								<NavLink to="/works/artworks">Artworks</NavLink>
							</li>
							<li>
								<NavLink to="/works/uiux">UIUX</NavLink>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
}
