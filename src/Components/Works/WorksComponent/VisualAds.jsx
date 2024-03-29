import React, { Suspense } from 'react';
import { publicpath } from '../../../Helpers/publicpath';
import { ReactComponent as LoadingSvg } from '../../../loading.svg';

const Image = React.lazy(() => import('../../WorkImages/Image'));

const video_cover_pic_path = publicpath + '/assets/images/video_cover_pics/';

class VisualAds extends React.Component {
	state = {
		lightboxShow: false,
		iframeTitle: null,
		iframeSrc: null
	};

	render() {
		return (
			<React.Fragment>
				<section onContextMenu={(e)=> e.preventDefault()} className="works_sec_container">
					<div className="container">
						<div className="row no-margin-bottom" style={{ position: 'relative' }}>
							<div
								className="col s12 m4 l4 image_wrapper hide-on-small-only"
								style={{ position: 'unset' }}
							>
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
										<h4 className="gh_green_txt font_roboto_slab_bold">Visual Ads</h4>
										<h5 className="gh_secondary_black_txt font_roboto_slab_bold">Visual Ads</h5>
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
									onClick={() =>
										this.setState({
											lightboxShow: true,
											iframeTitle:
												'Emotional Corporate Ad | Best post retirement living | Sundaratheeram',
											iframeSrc: 'https://www.youtube.com/embed/speJWGacN3k'
										})}
								>
									<Suspense fallback={<LoadingSvg />}>
										<Image
											src={video_cover_pic_path + 'sundaratheeram.jpg'}
											class="img-fit-with-width"
										/>

										<div className="video_play_btn">
											<i className="material-icons">play_arrow</i>
										</div>
									</Suspense>
								</div>
							</div>

							<div className="col s12 hide-on-med-and-up image_wrapper">
								<h4 className="gh_green_txt font_roboto_slab_bold">Visual Ads</h4>
								<h5 className="gh_secondary_black_txt font_roboto_slab_bold">Visual Ads</h5>
							</div>

							<div
								className="col s12 hide-on-med-and-up image_wrapper"
								onClick={() =>
									this.setState({
										lightboxShow: true,
										iframeTitle:
											'Emotional Corporate Ad | Best post retirement living | Sundaratheeram',
										iframeSrc: 'https://www.youtube.com/embed/speJWGacN3k'
									})}
							>
								<Suspense fallback={<LoadingSvg />}>
									<Image
										src={video_cover_pic_path + 'sundaratheeram.jpg'}
										class="img-fit-with-width"
									/>

									<div className="video_play_btn">
										<i className="material-icons">play_arrow</i>
									</div>
								</Suspense>
							</div>

							<div
								className="col s12 m8 l8 image_wrapper"
								onClick={() =>
									this.setState({
										lightboxShow: true,
										iframeTitle:
											'Animated Introduction Video Ad | Sangeetha Mobiles | Created by Grasshopper Design',
										iframeSrc: 'https://www.youtube.com/embed/vWhCtPke3yQ'
									})}
							>
								<Suspense fallback={<LoadingSvg />}>
									<Image src={video_cover_pic_path + 'sangeetha.jpg'} class="img-fit-with-width" />

									<div className="video_play_btn">
										<i className="material-icons">play_arrow</i>
									</div>
								</Suspense>
							</div>
						</div>

						<div className="row">
							<div
								className="col s12 m6 image_wrapper"
								onClick={() =>
									this.setState({
										lightboxShow: true,
										iframeTitle:
											'Real Estate Promotional Video | Sagara Realtors | Created by Grasshopper Design',
										iframeSrc: 'https://www.youtube.com/embed/-_0KuB3NZnk'
									})}
							>
								<Suspense fallback={<LoadingSvg />}>
									<Image src={video_cover_pic_path + 'sagara.jpg'} class="img-fit-with-width" />

									<div className="video_play_btn">
										<i className="material-icons">play_arrow</i>
									</div>
								</Suspense>
							</div>
						</div>
					</div>
				</section>

				{this.state.lightboxShow && (
					<div className="lightbox">
						<span
							className="valign_wrapper lightbox_close_btn"
							onClick={() =>
								this.setState({
									lightboxShow: false,
									iframeSrc: null,
									iframeTitle: null
								})}
						>
							<i className="material-icons">close</i>
						</span>

						<div className="youtube_video_wrapper container">
							<iframe
								title={this.state.iframeTitle}
								width="100%"
								height="100%"
								src={this.state.iframeSrc}
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default VisualAds;

// export default function VisualAds() {

// }
