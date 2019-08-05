import React, { useState } from 'react';
import { ReactComponent as LoadingSvg } from '../../loading.svg';

export default function Image(props) {
	const [ state, setstate ] = useState(true);

	const handleImageLoaded = () => setstate(false);

	return (
		<React.Fragment>
			<img
				src={props.src}
				alt={props.alt ? props.alt : ''}
				className={props.class ? props.class : null}
				onLoad={handleImageLoaded}
			/>

			{state && <LoadingSvg />}
		</React.Fragment>
	);
}
