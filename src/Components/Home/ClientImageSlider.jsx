import React from 'react';
import { client_images_data2 } from './home_page_data';
import { publicpath } from '../../Helpers/publicpath';

class ClientImageSlider extends React.Component {
	constructor() {
		super();
		this.state = {
			slider_left: 0
		};
	}

	componentDidMount() {
		console.log('comp did mount');
	}

	render() {
		console.log('slider left: ', this.state.slider_left);
		return (
			<div id="client_belt" className="valign-wrapper">
				{client_images_data2.map((e, index) => (
					<div className="client_images" key={index}>
						<img
							src={publicpath + '/assets/images/client_logo/' + e.imgname}
							alt={e.alt}
							className="img-fit-with-height"
						/>
					</div>
				))}
			</div>
		);
	}
}

export default ClientImageSlider;
