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
						margin: '1em auto auto auto',
						maxWidth: '600px',
						color: '#707070',
						fontSize: '2em'
					}}
				>
					Creating brands that are truthful, innovative and beautifull
				</p>
			</div>
		</div>
	);
}
