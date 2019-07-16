import React from 'react';
import './footer.scss';

export default function Footer() {
	return (
		<div className="footer_container">
			<div className="container">
				<h5 style={{ color: '#95d600', fontWeight: 'bold' }} className="center">
					Contact with us
				</h5>

				<p
					className="center"
					style={{
						margin: '1em auto 1em',
						maxWidth: '600px',
						color: '#707070',
						fontSize: '2em'
					}}
				>
					Creating brands that are truthful, innovative and beautifull
				</p>

				<div className="follow_links">
					<div className="follow_sec">
						<div className="follow_link_heading">
							<p className="no-margin gh_secondary_black_txt" style={{ fontWeight: 'bold' }}>
								Friendly Visit
							</p>
							<hr style={{ border: '2px solid #95d600', width: '50px', margin: '5px 0 0 0' }} />
						</div>
						<div>
							<p className="gh_secondary_black_txt">
								#47, First Floor, 2nd Main, JP Nagar 8th Phase, Jambusavari Dinne Bengaluru - 560 076
							</p>
						</div>
					</div>

					<div className="follow_sec">
						<div className="follow_link_heading">
							<p className="no-margin gh_secondary_black_txt" style={{ fontWeight: 'bold' }}>
								Contact Us
							</p>
							<hr style={{ border: '2px solid #95d600', width: '50px', margin: '5px 0 0 0' }} />
						</div>
						<p className="gh_secondary_black_txt">info@grasshopperdesign.in</p>
					</div>

					<div className="follow_sec">
						<div className="follow_link_heading">
							<p className="no-margin gh_secondary_black_txt" style={{ fontWeight: 'bold' }}>
								Follow Us
							</p>
							<hr style={{ border: '2px solid #95d600', width: '50px', margin: '5px 0 0 0' }} />
						</div>
						<p className="gh_secondary_black_txt">info@grasshopperdesign.in</p>
					</div>
				</div>
			</div>

			<p className="no-margin center" style={{ color: '#707070', paddingTop: '2em' }}>
				CopyRight @ GrasshopperDesign Pvt. Ltd. {new Date().getFullYear()}
			</p>
		</div>
	);
}
