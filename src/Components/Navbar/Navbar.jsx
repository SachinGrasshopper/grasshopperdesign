import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition, animated } from 'react-spring/renderprops';
import './navbar.scss';
import { publicpath } from '../../Helpers/publicpath';

export default function Navbar({ toggleMobileNavbar }) {
	const [ state, setstate ] = useState({ showNavDropdown: false });

	// const navDropdown = () => {
	// 	if (!state.showNavDropdown) document.removeEventListener('click', outsideNavDropdown);
	// 	else document.addEventListener('click', outsideNavDropdown);
	// };

	// const outsideNavDropdown = () => navDropdown();

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
						<NavLink to="/">Home</NavLink>
					</li>
					<li
						className="dropdown_btn"
						onClick={() => {
							setstate({ ...state, showNavDropdown: !state.showNavDropdown });
							// navDropdown();
						}}
					>
						Works
						<Transition
							items={state.showNavDropdown}
							from={{ opacity: 0, marginTop: -10 }}
							enter={{ opacity: 1, marginTop: 0 }}
							leave={{ opacity: 0, marginTop: -10 }}
						>
							{(show) =>
								show &&
								((props) => (
									<animated.div style={props}>
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
											<li>
												<NavLink to="/works/interiors">3D Interior Design</NavLink>
											</li>
										</ul>
									</animated.div>
								))}
						</Transition>
					</li>
				</ul>

				<div className="right hide-on-med-and-up">
					<button onClick={toggleMobileNavbar}>
						<i className="material-icons">menu</i>
					</button>
				</div>
			</div>
		</nav>
	);
}
