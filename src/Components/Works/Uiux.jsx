import React from 'react';
import { publicpath } from '../../Helpers/publicpath';

const uiux_path = publicpath + '/assets/images/websites/';

export default function Uiux() {
	return (
		<section className="works_sec_container" style={{ paddingTop: '8em' }}>
			<div className="container">
				<div className="row">
					<div className="col s12 image_wrapper">
						<img src={uiux_path + '1.png'} alt="" className="img-fit-with-width" />
					</div>

					<div className="col s6 image_wrapper">
						<img src={uiux_path + '2.png'} alt="" className="img-fit-with-width" />
					</div>

					<div className="col s6 image_wrapper">
						<img src={uiux_path + '3.png'} alt="" className="img-fit-with-width" />
					</div>
				</div>
			</div>
		</section>
	);
}
