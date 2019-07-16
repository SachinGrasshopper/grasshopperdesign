import React from 'react';
import { publicpath } from '../../Helpers/publicpath';
import './works.scss';

const vb_path = publicpath + '/assets/images/vehicle_branding/';
const standies_path = publicpath + '/assets/images/standies/';

export default function VehicleBranding() {
	let somediv = React.createRef();

	console.log(somediv.current.clientHeight);

	return (
		<section style={{ paddingTop: '8em' }} className="works_sec_container">
			<div className="container">
				<div className="row">
					<div
						className="col s12 m4 l4 custom_padding a"
						style={{
							// height: somediv.current,
							border: '1px solid red'
						}}
					>
						{/* <img src={standies_path + '3.png'} className="img-fit-with-width" /> */}
						<div>dd</div>
					</div>

					<div className="col s12 m8 l8 custom_padding" ref={somediv}>
						<img src={vb_path + '7.png'} className="img-fit-with-width" />
					</div>

					<div className="col s4 custom_padding">
						<img src={vb_path + '1.png'} className="img-fit-with-width" />
					</div>

					<div className="col s4 custom_padding">
						<img src={vb_path + '2.png'} className="img-fit-with-width" />
					</div>

					<div className="col s4 custom_padding">
						<img src={vb_path + '3.png'} className="img-fit-with-width" />
					</div>

					<div className="col s4 custom_padding">
						<img src={vb_path + '4.png'} className="img-fit-with-width" />
					</div>

					<div className="col s4 custom_padding">
						<img src={vb_path + '5.png'} className="img-fit-with-width" />
					</div>

					<div className="col s4 custom_padding">
						<img src={vb_path + '6.png'} className="img-fit-with-width" />
					</div>

					<div className="col s6 custom_padding">
						<img src={standies_path + '1.png'} className="img-fit-with-width" />
					</div>

					<div className="col s6 custom_padding">
						<img src={standies_path + '2.png'} className="img-fit-with-width" />
					</div>
				</div>
			</div>
		</section>
	);
}
