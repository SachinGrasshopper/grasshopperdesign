import React, { Fragment } from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CorporateIdentity from './Components/Works/CorporateIdentity';
import VehicleBranding from './Components/Works/VehicleBranding';

function App() {
	return (
		<Fragment>
			<Navbar />

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/branding/corporateidentity" exact component={CorporateIdentity} />
				<Route path="/branding/vehiclebranding" exact component={VehicleBranding} />
			</Switch>

			<Footer />
		</Fragment>
	);
}

export default App;
