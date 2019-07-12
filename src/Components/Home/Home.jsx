import React, { Fragment, useState } from 'react';
import './home.scss';
import { client_images_data, best_at_data } from './home_page_data';
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

			<section
				className="sec4"
				style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/logo/mission_bg.png)` }}
			>
				<div className="sec4_div">
					<div className="container">
						<div className="row">
							<div className="col s12 m6 l4">
								<h6>MISSION</h6>
								<p className="no-margin-top">
									We value the power of simplicity stripping away the clutter to create immersive
									sensory experiences.
								</p>
							</div>
							<div className="col s12 m6 l4">
								<h6>VISSION</h6>
								<p>
									It’s important to make a good first impression and hopefully a lasting one too! by
									understanding your company’s audience, values and goals, we produce branding and
									design that clearly communicate your vision.
								</p>
								<p className="no-margin-top">Do excellent work for excellent people…</p>
							</div>
							<div className="col s12 m12 l4">
								<h6>APPROACH</h6>
								<p>
									We appreciate that every client and project is unique and a one size fits all
									solution just doesn’t work, we therefore take time to get to know our clients, their
									target markets and ambitions for their design and branding projects.{' '}
								</p>
								<p className="no-margin">
									This discovery process ensures what we design and build is perfectly positioned and
									poised for success.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="sec5">
				<div className="container">
					<p className="center">
						We create immersive sensory experiences across any design industry. Our eye for up to date and
						meticulous finishing creates inspired on brand results. We love to collaborate and work
						regularly with private and corporate clients.
					</p>

					<div className="best_at_box">
						{best_at_data.map((e, index) => (
							<div className="best_at" key={index}>
								<div className="best_at_icon">
									<img
										src={`${process.env.PUBLIC_URL}/assets/images/logo/${e.img}`}
										alt={e.name}
										className="img-fit-with-height"
									/>
								</div>
								<div className="best_at_txt">{e.name}</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Fragment>
	);
}
