import React from 'react';
import { publicpath } from '../../Helpers/publicpath';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

export default function MobileNavbar({ toggleMobileNavbar, animatedprops }) {
	return (
		<div className="mobile_navbar_container hide-on-med-and-up" style={animatedprops}>
			<button className="mobile_menu_close_btn" onClick={toggleMobileNavbar}>
				<i className="material-icons">close</i>
			</button>

			<div className="center" style={{ marginTop: '12%' }}>
				<img
					src={publicpath + '/assets/images/logo/logo.png'}
					alt="Grasshopperdesign Pvt Ltd"
					style={{ width: '120px' }}
				/>
			</div>

			<div className="valign-wrapper menu_links">
				<ul className="center">
					<li>
						<NavLink to="/" onClick={toggleMobileNavbar}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/works/corporateidentity" onClick={toggleMobileNavbar}>
							Corporate Identity
						</NavLink>
					</li>
					<li>
						<NavLink to="/works/vehiclebranding" onClick={toggleMobileNavbar}>
							Vehicle Branding
						</NavLink>
					</li>
					<li>
						<NavLink to="/works/packaging" onClick={toggleMobileNavbar}>
							Packaging
						</NavLink>
					</li>
					<li>
						<NavLink to="/works/posters" onClick={toggleMobileNavbar}>
							Posters
						</NavLink>
					</li>
					<li>
						<NavLink to="/works/artworks" onClick={toggleMobileNavbar}>
							Artworks
						</NavLink>
					</li>
					<li>
						<NavLink to="/works/uiux" onClick={toggleMobileNavbar}>
							UIUX
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="mobile_navbar" />
		</div>
	);
}