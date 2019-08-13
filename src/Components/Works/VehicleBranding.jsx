import React from 'react';
import { publicpath } from '../../Helpers/publicpath';

const vb_path = publicpath + '/assets/images/vehicle_branding/';
const standies_path = publicpath + '/assets/images/standies/';

export default function VehicleBranding() {
	return (
		<section style={{ paddingTop: '8em' }} className="works_sec_container">
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
							<div>
								<h4 className="gh_green_txt font_roboto_slab_bold">Branding</h4>
								<h5 className="gh_secondary_black_txt font_roboto_slab_bold">
									Vehicle Branding / Standees
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
							<img src={standies_path + '3.png'} className="img-fit-with-width" alt="" />
						</div>
					</div>

					<div className="col s12 hide-on-med-and-up image_wrapper">
						<h4 className="gh_green_txt font_roboto_slab_bold">Branding</h4>
						<h5 className="gh_secondary_black_txt font_roboto_slab_bold">Corporate Identity</h5>
					</div>

					<div className="col s12 hide-on-med-and-up image_wrapper">
						<img src={standies_path + '3.png'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s12 m8 l8 image_wrapper">
						<img src={vb_path + '7.png'} className="img-fit-with-width" alt="" />
					</div>
				</div>

				<div className="row">
					<div className="col s4 image_wrapper">
						<img src={vb_path + '1.png'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s4 image_wrapper">
						<img src={vb_path + '2.png'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s4 image_wrapper">
						<img src={vb_path + '3.png'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s4 image_wrapper">
						<img src={vb_path + '4.png'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s4 image_wrapper">
						<img src={vb_path + '5.png'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s4 image_wrapper">
						<img src={vb_path + '6.png'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s6 image_wrapper">
						<img src={standies_path + '1.png'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s6 image_wrapper">
						<img src={standies_path + '2.png'} className="img-fit-with-width" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}
