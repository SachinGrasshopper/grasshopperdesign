import React, { Fragment, useState } from 'react';
import './home.scss';
import client_images_data from './client_images_data';
import ClientImageSlider from './ClientImageSlider';

export default function Home() {
	const [ state, setState ] = useState({
		client_images_data,
		slide_num: 1,
		total_images: Object.keys(client_images_data).length
	});

	const increment_slide_num = () => {
		let temp = state.slide_num + 1;
		if (temp <= state.total_images) {
			setState({
				...state,
				slide_num: state.slide_num + 1
			});
		} else {
			setState({
				...state,
				slide_num: 1
			});
		}
	};

	const decrement_slide_num = () => {
		let temp = state.slide_num - 1;
		if (temp >= 1) {
			setState({
				...state,
				slide_num: state.slide_num - 1
			});
		} else {
			setState({
				...state,
				slide_num: state.total_images
			});
		}
	};

	return (
		<Fragment>
			<section className="sec1">
				<div className="sec1_div">
					<div className="sec1_graffiti">
						<p className="no-margin">some masd</p>
					</div>

					<div className="row no-margin client_icons valign-wrapper">
						<div className="col s2" style={{ display: 'flex' }}>
							<p className="no-margin" style={{ color: '#707070' }}>
								Trusted By
							</p>

							<hr style={{ border: '1px solid #d2d2d2', width: '70px', marginLeft: '15px' }} />
						</div>

						<div className="col s10 valign-wrapper" style={{ justifyContent: 'space-between' }}>
							{/* {state.client_images[state.slide_num].map((imgs, index) => (
								<div className="client_images" key={index}>
									<img
										src={process.env.PUBLIC_URL + '/assets/images/client_logo/' + imgs.imgname}
										alt={imgs.alt}
										className="img-fit-with-height"
									/>
								</div>
                            ))} */}

							<ClientImageSlider
								client_images_data={state.client_images_data}
								slide_num={state.slide_num}
								total_images={state.total_images}
							/>
						</div>

						<div className="client_img_controls">
							<div style={{ top: '20%' }}>
								<span className="valign-wrapper" onClick={increment_slide_num}>
									<i className="material-icons">keyboard_arrow_up</i>
								</span>
							</div>
							<div style={{ bottom: '20%' }}>
								<span className="valign-wrapper" onClick={decrement_slide_num}>
									<i className="material-icons">keyboard_arrow_down</i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
}
