import React, { Fragment, useState } from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import { Navbar, MobileNavbar } from './Components/Navbar';
import Footer from './Components/Footer';
import {
	Artworks,
	CorporateIdentity,
	Interior,
	Packaging,
	Posters,
	Uiux,
	VehicleBranding,
	VisualAds
} from './Components/Works';
import { Transition } from 'react-spring/renderprops';
import Team from './Components/Team';

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
							toggleMobileNavbar={() => {
								setstate({
									...state,
									showMobileNavbar: !state.showMobileNavbar
								});
								window.scrollTo(0, 0);
							}}
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
				<Route path="/works/visualads" exact component={VisualAds} />
				<Route path="/team" exact component={Team} />
			</Switch>

			<Footer />
		</Fragment>
	);
}

export default App;
