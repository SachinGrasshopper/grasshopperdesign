import React, { Fragment, useState } from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import CorporateIdentity from './Components/Works/CorporateIdentity';
import VehicleBranding from './Components/Works/VehicleBranding';
import Packaging from './Components/Works/Packaging';
import Posters from './Components/Works/Posters';
import Artworks from './Components/Works/Artworks';
import Uiux from './Components/Works/Uiux';
import Interior from './Components/Works/Interior';
import MobileNavbar from './Components/Navbar/MobileNavbar';
import { Transition } from 'react-spring/renderprops';

function App() {
	const [ state, setstate ] = useState({
		showMobileNavbar: false
	});

	return (
		<Fragment>
			<Navbar
				toggleMobileNavbar={() =>
					setstate({
						...state,
						showMobileNavbar: !state.showMobileNavbar
					})}
			/>

			<Transition
				items={state.showMobileNavbar}
				from={{ opacity: 0, marginTop: -10 }}
				enter={{ opacity: 1, marginTop: 0 }}
				leave={{ opacity: 0, marginTop: -10 }}
			>
				{(show) =>
					show &&
					((props) => (
						<MobileNavbar
							toggleMobileNavbar={() =>
								setstate({
									...state,
									showMobileNavbar: !state.showMobileNavbar
								})}
							animatedprops={props}
						/>
					))}
			</Transition>

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/works/corporateidentity" exact component={CorporateIdentity} />
				<Route path="/works/vehiclebranding" exact component={VehicleBranding} />
				<Route path="/works/packaging" exact component={Packaging} />
				<Route path="/works/posters" exact component={Posters} />
				<Route path="/works/artworks" exact component={Artworks} />
				<Route path="/works/uiux" exact component={Uiux} />
				<Route path="/works/interiors" exact component={Interior} />
			</Switch>

			<Footer />
		</Fragment>
	);
}

export default App;
