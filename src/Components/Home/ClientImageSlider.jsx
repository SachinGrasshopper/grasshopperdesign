import React from 'react';

export default function ClientImageSlider({ client_images_data, slide_num, total_images }) {
	return client_images_data[slide_num].map((imgs, index) => (
		<div className="client_images" key={index}>
			<img
				src={process.env.PUBLIC_URL + '/assets/images/client_logo/' + imgs.imgname}
				alt={imgs.alt}
				className="img-fit-with-height"
			/>
		</div>
	));
}
