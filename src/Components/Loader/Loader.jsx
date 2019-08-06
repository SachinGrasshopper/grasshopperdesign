import React from 'react';
import './Loader.scss';

export default function() {
	return (
		<div className="loader_container">
			<img src={process.env.PUBLIC_URL + '/assets/images/gh_load.gif'} alt="" />
		</div>
	);
}
