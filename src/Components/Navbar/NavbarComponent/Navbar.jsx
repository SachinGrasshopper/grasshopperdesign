import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition, animated } from 'react-spring/renderprops';
import { publicpath } from '../../../Helpers/publicpath';

export default function Navbar({ toggleMobileNavbar }) {
	const [ state, setstate ] = useState(false);

	// const navDropdown = () => {
	// 	if (!state.showNavDropdown) document.removeEventListener('click', outsideNavDropdown);
	// 	else document.addEventListener('click', outsideNavDropdown);
	// };

	// const outsideNavDropdown = () => navDropdown();

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<nav>
			<div className="container" style={{ height: 'inherit' }}>
				<NavLink
					to="/"
					className="left valign-wrapper"
					style={{ height: '100%' }}
					onClick={() => state && setstate(false)}
				>
					<img
						src={publicpath + '/assets/images/logo/logo.png'}
						alt="Company Logo"
						style={{ width: '90px' }}
					/>
				</NavLink>

				<ul className="nav_menu right hide-on-small-only">
					<li>
						<NavLink
							to="/"
							onClick={() => {
								setstate(false);
								scrollToTop();
							}}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/team"
							onClick={() => {
								setstate(false);
								scrollToTop();
							}}
						>
							Team
						</NavLink>
					</li>
					<li
						className="dropdown_btn"
						onClick={() => {
							setstate(!state);
							// navDropdown();
						}}
						style={{ color: 'white' }}
					>
						Works
						<Transition
							items={state}
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
												<NavLink to="/works/corporateidentity" onClick={() => scrollToTop()}>
													Corporate Identity
												</NavLink>
											</li>
											<li>
												<NavLink to="/works/vehiclebranding" onClick={() => scrollToTop()}>
													Vehicle Branding
												</NavLink>
											</li>
											<li>
												<NavLink to="/works/packaging" onClick={() => scrollToTop()}>
													Packaging
												</NavLink>
											</li>
											<li>
												<NavLink to="/works/posters" onClick={() => scrollToTop()}>
													Posters
												</NavLink>
											</li>
											<li>
												<NavLink to="/works/artworks" onClick={() => scrollToTop()}>
													Artworks
												</NavLink>
											</li>
											<li>
												<NavLink to="/works/uiux" onClick={() => scrollToTop()}>
													UIUX
												</NavLink>
											</li>
											<li>
												<NavLink to="/works/interiors" onClick={() => scrollToTop()}>
													3D Interior Design
												</NavLink>
											</li>
											<li>
												<NavLink to="/works/visualads" onClick={() => scrollToTop()}>
													Visual Ads
												</NavLink>
											</li>
										</ul>
									</animated.div>
								))}
						</Transition>
					</li>
				</ul>

				<div className="right hide-on-med-and-up">
					<button onClick={toggleMobileNavbar}>
						<i className="material-icons gh_white_txt">menu</i>
					</button>
				</div>
			</div>
		</nav>
	);
}
