import React, { Suspense } from 'react';
import { publicpath } from '../../../Helpers/publicpath';
import { ReactComponent as LoadingSvg } from '../../../loading.svg';
const Image = React.lazy(() => import('../../WorkImages/Image'));

const art_path = publicpath + '/assets/images/artworks/';

export default function Artworks() {
	return (
		<section onContextMenu={(e)=> e.preventDefault()} className="works_sec_container">
			<div onContextMenu={(e)=> e.preventDefault()}  className="container">
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
								<h4 className="gh_green_txt font_roboto_slab_bold">Artworks</h4>
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
							<Suspense fallback={<LoadingSvg />}>
								<Image src={art_path + '8.png'} class="img-fit-with-width" />
							</Suspense>
						</div>
					</div>

					<div className="col s12 hide-on-med-and-up image_wrapper">
						<h4 className="gh_green_txt font_roboto_slab_bold">Artworks</h4>
						<h5 className="gh_secondary_black_txt font_roboto_slab_bold">Posters</h5>
					</div>

					<div onContextMenu={(e)=> e.preventDefault()} className="col s12 hide-on-med-and-up image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '8.png'} class="img-fit-with-width" />
						</Suspense>
					</div>

					<div onContextMenu={(e)=> e.preventDefault()} className="col s12 m8 l8 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '9.png'} class="img-fit-with-width" />
						</Suspense>
					</div>
				</div>

				<div onContextMenu={(e)=> e.preventDefault()} className="row">
					<div className="col s6 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '1.png'} class="img-fit-with-width" />
						</Suspense>
					</div>

					<div className="col s6 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '2.png'} class="img-fit-with-width" />
						</Suspense>
					</div>

					<div className="col s6 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '3.png'} class="img-fit-with-width" />
						</Suspense>
					</div>

					<div className="col s6 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '4.png'} class="img-fit-with-width" />
						</Suspense>
					</div>

					<div className="col s6 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '5.png'} class="img-fit-with-width" />
						</Suspense>
					</div>

					<div className="col s6 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '6.png'} class="img-fit-with-width" />
						</Suspense>
					</div>

					{/* <div className="col s6 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '10.png'} class="img-fit-with-width" />
						</Suspense>
					</div> */}

					{/* <div className="col s6 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '11.png'} class="img-fit-with-width" />
						</Suspense>
					</div> */}

					{/* <div className="col s6 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '12.png'} class="img-fit-with-width" />
						</Suspense>
					</div> */}

					{/* <div className="col s6 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '13.png'} class="img-fit-with-width" />
						</Suspense>
					</div> */}

					<div className="col s12 image_wrapper">
						<Suspense fallback={<LoadingSvg />}>
							<Image src={art_path + '7.png'} class="img-fit-with-width" />
						</Suspense>
					</div>
				</div>
			</div>
		</section>
		
	);

	
}
