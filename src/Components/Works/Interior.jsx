import React from 'react';
import { publicpath } from '../../Helpers/publicpath';
import './works.scss';

const interior_path = publicpath + '/assets/images/interiors/';

export default function Interior() {
	return (
		<section className="works_sec_container" style={{ paddingTop: '8em' }}>
			<div className="container">
				<div className="row no-margin-bottom" style={{ position: 'relative' }}>
					<div className="col s12 m4 l4 image_wrapper hide-on-small-only" style={{ position: 'unset' }}>
						<div
							className="image_wrapper"
							style={{
								position: 'absolute',
								height: '50%',
								width: 'inherit',
								top: 0,
								left: 0,
								display: 'flex',
								alignItems: 'flex-end'
							}}
						>
							<div style={{ width: '100%' }}>
								<h4 className="gh_green_txt font_roboto_slab_bold">Branding</h4>
								<h5
									className="gh_secondary_black_txt font_roboto_slab_bold"
									style={{ wordBreak: 'break-word' }}
								>
									Posters
								</h5>
							</div>
						</div>

						<div
							className="image_wrapper"
							style={{
								position: 'absolute',
								height: '50%',
								width: 'inherit',
								bottom: 0,
								left: 0
							}}
						>
							<img src={interior_path + '1.jpeg'} className="img-fit-with-width" alt="" />
						</div>
					</div>

					<div className="col s12 hide-on-med-and-up image_wrapper">
						<h4 className="gh_green_txt font_roboto_slab_bold">3D Interior</h4>
						<h5 className="gh_secondary_black_txt font_roboto_slab_bold">Interior Design</h5>
					</div>

					<div className="col s12 hide-on-med-and-up image_wrapper">
						<img src={interior_path + '1.jpeg'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s12 m8 l8 image_wrapper">
						<img src={interior_path + '2.jpeg'} className="img-fit-with-width" alt="" />
					</div>
				</div>

				<div className="row">
					<div className="col s12 image_wrapper">
						<img src={interior_path + '3.jpeg'} alt="" className="img-fit-with-width" />
					</div>
					<div className="col s12 image_wrapper">
						<img src={interior_path + '4.jpeg'} alt="" className="img-fit-with-width" />
					</div>
					<div className="col s12 image_wrapper">
						<img src={interior_path + '5.jpg'} alt="" className="img-fit-with-width" />
					</div>
					<div className="col s12 image_wrapper">
						<img src={interior_path + '6.jpeg'} alt="" className="img-fit-with-width" />
					</div>
					<div className="col s12 image_wrapper">
						<img src={interior_path + '7.jpeg'} alt="" className="img-fit-with-width" />
					</div>
					<div className="col s12 image_wrapper">
						<img src={interior_path + '8.jpeg'} alt="" className="img-fit-with-width" />
					</div>
					<div className="col s12 image_wrapper">
						<img src={interior_path + '9.jpeg'} alt="" className="img-fit-with-width" />
					</div>
					<div className="col s12 image_wrapper">
						<img src={interior_path + '10.jpeg'} alt="" className="img-fit-with-width" />
					</div>
					<div className="col s12 image_wrapper">
						<img src={interior_path + '11.jpeg'} alt="" className="img-fit-with-width" />
					</div>
					<div className="col s12 image_wrapper">
						<img src={interior_path + '12.jpeg'} alt="" className="img-fit-with-width" />
					</div>
					<div className="col s12 image_wrapper">
						<img src={interior_path + '13.jpeg'} alt="" className="img-fit-with-width" />
					</div>
				</div>
			</div>
		</section>
	);
}
