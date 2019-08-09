import React from 'react';
import { withSize } from 'react-sizeme';
import { client_images_data } from './home_page_data';
import { publicpath } from '../../Helpers/publicpath';
import { ClientLogoBelt } from '../../StyledComponents/ClientLogoBelt';

class ClientImageSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clientLogoBeltWidth: 0
		};
	}

	render() {
		return (
			<ClientLogoBelt leftSlide={this.props.size.width - 964.36} className="valign-wrapper">
				{client_images_data.map((e, index) => (
					<div className="client_images" key={index} style={e.style === undefined ? null : e.style}>
						<img
							src={publicpath + '/assets/images/client_logo/' + e.imgname}
							alt={e.alt}
							className="img-fit-with-height"
						/>
					</div>
				))}
			</ClientLogoBelt>
		);
	}
}

export default withSize()(ClientImageSlider);
