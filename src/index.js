import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Loader from './Components/Loader';
const App = React.lazy(() => import('./App'));

ReactDOM.render(
	<BrowserRouter>
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
