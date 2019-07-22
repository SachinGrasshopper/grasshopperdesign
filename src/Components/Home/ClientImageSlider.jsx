import React from 'react';
import { client_images_data2 } from './home_page_data';
import { publicpath } from '../../Helpers/publicpath';

class ClientImageSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slider_left: 0
		};
	}

	render() {
		return (
			<div id="client_belt" ref={this.props.sliderRef} className="valign-wrapper">
				{client_images_data2.map((e, index) => (
					<div className="client_images" key={index} style={e.style === undefined ? null : e.style}>
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
