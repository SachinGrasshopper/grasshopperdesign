import styled, { keyframes } from 'styled-components';

function slider(props) {
	return keyframes`
        0% {
            left: 0;
        }
        100% {
            left: -${props.leftSlide}px;
        }
    `;
}

export const ClientLogoBelt = styled.div`
	position: absolute;
	height: 100%;
	top: 0;
	animation: ${(props) => slider} 85s linear infinite;

	&:hover {
		animation-play-state: paused;
	}
`;
