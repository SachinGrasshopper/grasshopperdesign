import React, { Fragment } from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Works from './Components/Works/Works';

function App() {
	return (
		<Fragment>
			<Navbar />

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/works" exact component={Works} />
			</Switch>

			<Footer />
		</Fragment>
	);
}

export default App;
