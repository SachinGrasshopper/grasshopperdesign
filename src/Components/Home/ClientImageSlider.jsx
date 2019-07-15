import React, { Component, Fragment } from 'react';
import { client_images_data2 } from './home_page_data';

class ClientImageSlider extends Component {
	state = {
		one: 0,
		two: 1,
		three: 2,
		four: 3,
		total_imgs: client_images_data2.length,
		time: 0
	};

	componentDidMount() {
		this.interval = setInterval(() => {
			let choice = Math.floor(Math.random() * 4),
				random_img = Math.floor(Math.random() * this.state.total_imgs);

			if (
				random_img !== this.state.one &&
				random_img !== this.state.two &&
				random_img !== this.state.three &&
				random_img !== this.state.four
			) {
				switch (choice) {
					case 0:
						this.setState({ one: random_img });
						break;
					case 1:
						this.setState({ two: random_img });
						break;
					case 2:
						this.setState({ three: random_img });
						break;
					case 3:
						this.setState({ four: random_img });
						break;

					default:
						break;
				}
			}
		}, 3000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<Fragment>
				<div className="client_images">
					<img
						src={
							process.env.PUBLIC_URL +
							'/assets/images/client_logo/' +
							client_images_data2[this.state.one].imgname
						}
						alt={client_images_data2[this.state.one].alt}
						className="img-fit-with-height"
					/>
				</div>

				<div className="client_images">
					<img
						src={
							process.env.PUBLIC_URL +
							'/assets/images/client_logo/' +
							client_images_data2[this.state.two].imgname
						}
						alt={client_images_data2[this.state.two].alt}
						className="img-fit-with-height"
					/>
				</div>

				<div className="client_images">
					<img
						src={
							process.env.PUBLIC_URL +
							'/assets/images/client_logo/' +
							client_images_data2[this.state.three].imgname
						}
						alt={client_images_data2[this.state.three].alt}
						className="img-fit-with-height"
					/>
				</div>

				<div className="client_images">
					<img
						src={
							process.env.PUBLIC_URL +
							'/assets/images/client_logo/' +
							client_images_data2[this.state.four].imgname
						}
						alt={client_images_data2[this.state.four].alt}
						className="img-fit-with-height"
					/>
				</div>
			</Fragment>
		);
	}
}

export default ClientImageSlider;
