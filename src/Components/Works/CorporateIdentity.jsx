import React from 'react';
import { publicpath } from '../../Helpers/publicpath';
import './works.scss';

const corporate_path = publicpath + '/assets/images/corporate_identity/';

export default function CorporateIdentity() {
	return (
		<section style={{ paddingTop: '8em' }} className="works_sec_container">
			<div className="container">
				<div className="row no-margin-bottom" style={{ position: 'relative' }}>
					<div className="col s12 m4 l4 custom_padding hide-on-small-only">
						<div
							className="custom_padding"
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
								<h5 className="gh_secondary_black_txt font_roboto_slab_bold">Corporate Identity</h5>
							</div>
						</div>

						<div
							className="custom_padding"
							style={{
								position: 'absolute',
								height: '50%',
								width: 'inherit',
								bottom: 0,
								left: 0
							}}
						>
							<img src={corporate_path + '4.png'} className="img-fit-with-width" alt="" />
						</div>
					</div>

					<div className="col s12 hide-on-med-and-up custom_padding">
						<h4 className="gh_green_txt font_roboto_slab_bold">Branding</h4>
						<h5 className="gh_secondary_black_txt font_roboto_slab_bold">Corporate Identity</h5>
					</div>

					<div className="col s12 m8 l8 custom_padding">
						<img src={corporate_path + '5.png'} alt="" className="img-fit-with-width" />
					</div>
				</div>

				<div className="row">
					<div className="col s12 m4 l4 custom_padding">
						<div style={{ width: '100%' }}>
							<img src={corporate_path + '6.png'} className="img-fit-with-width" alt="" />
						</div>
						<div style={{ width: '100%' }}>
							<img src={corporate_path + '3.png'} className="img-fit-with-width" alt="" />
						</div>
					</div>

					<div className="col s12 m8 l8 custom_padding">
						<img src={corporate_path + '0.png'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s12 m8 l8 custom_padding">
						<img src={corporate_path + '2.png'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s12 m4 l4 custom_padding">
						<div style={{ width: '100%' }}>
							<img src={corporate_path + '1.png'} className="img-fit-with-width" alt="" />
						</div>
						<div style={{ width: '100%' }}>
							<div className="row" style={{ margin: '0 -0.20rem' }}>
								<div className="col s6 custom_padding">
									<img src={corporate_path + '7.png'} className="img-fit-with-width" alt="" />
								</div>
								<div className="col s6 custom_padding">
									<img src={corporate_path + '8.png'} className="img-fit-with-width" alt="" />
								</div>
							</div>
							<div className="row" style={{ margin: '0 -0.20rem' }}>
								<div className="col s6 custom_padding">
									<img src={corporate_path + '9.png'} className="img-fit-with-width" alt="" />
								</div>
								<div className="col s6 custom_padding">
									<img src={corporate_path + '10.png'} className="img-fit-with-width" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
