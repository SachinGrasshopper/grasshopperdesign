import React, { Fragment } from 'react';
import './App.scss';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
	return (
		<Fragment>
			<Navbar />

			<Home />
		</Fragment>
	);
}

export default App;
