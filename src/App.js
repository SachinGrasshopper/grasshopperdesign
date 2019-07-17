import React, { Fragment } from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CorporateIdentity from './Components/Works/CorporateIdentity';
import VehicleBranding from './Components/Works/VehicleBranding';
import Packaging from './Components/Works/Packaging';
import Posters from './Components/Works/Posters';
import Artworks from './Components/Works/Artworks';
import Uiux from './Components/Works/Uiux';

function App() {
	return (
		<Fragment>
			<Navbar />

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/works/corporateidentity" exact component={CorporateIdentity} />
				<Route path="/works/vehiclebranding" exact component={VehicleBranding} />
				<Route path="/works/packaging" exact component={Packaging} />
				<Route path="/works/posters" exact component={Posters} />
				<Route path="/works/artworks" exact component={Artworks} />
				<Route path="/works/uiux" exact component={Uiux} />
			</Switch>

			<Footer />
		</Fragment>
	);
}

export default App;
