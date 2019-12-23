import React from 'react';
import { publicpath } from '../../../Helpers/publicpath';

const uiux_path = publicpath + '/assets/images/websites/';

export default function Uiux() {
	return (
		<section onContextMenu={(e)=> e.preventDefault()} className="works_sec_container">
			<div className="container">
				<div className="row no-margin-bottom" style={{ position: 'relative' }}>
					<div className="col s12 m4 l4 image_wrapper hide-on-small-only">
						<h4 className="gh_green_txt font_roboto_slab_bold no-margin">UIUX</h4>
						<h5
							className="gh_secondary_black_txt font_roboto_slab_bold"
							style={{ wordBreak: 'break-word' }}
						>
							Web Design
						</h5>

						{/* <div
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
						</div> */}
					</div>

					<div className="col s12 hide-on-med-and-up image_wrapper">
						<h4 className="gh_green_txt font_roboto_slab_bold no-margin">Branding</h4>
						<h5 className="gh_secondary_black_txt font_roboto_slab_bold">Posters</h5>
					</div>

					{/* <div className="col s12 hide-on-med-and-up image_wrapper">
						<img src={standies_path + '3.png'} className="img-fit-with-width" alt="" />
					</div>

					<div className="col s12 m8 l8 image_wrapper">
						<img src={poster_path + '1.png'} className="img-fit-with-width" alt="" />
					</div> */}
				</div>

				<div className="row">
					<div className="col s12 image_wrapper">
						<img src={uiux_path + '1.png'} alt="" className="img-fit-with-width" />
					</div>

					<div className="col s12 m6 image_wrapper">
						<img src={uiux_path + '2.png'} alt="" className="img-fit-with-width" />
					</div>

					<div className="col s12 m6 image_wrapper">
						<img src={uiux_path + '3.png'} alt="" className="img-fit-with-width" />
					</div>

					<div className="col s12 m6 image_wrapper">
						<img src={uiux_path + '4.png'} alt="" className="img-fit-with-width" />
					</div>

					<div className="col s12 m6 image_wrapper">
						<img src={uiux_path + '5.png'} alt="" className="img-fit-with-width" />
					</div>
				</div>
			</div>
		</section>
	);
}
