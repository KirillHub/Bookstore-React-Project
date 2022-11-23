import styled from "@emotion/styled";

export const CustomArrow = styled.div`
	z-index: 10;
	transition: all ease 0.4s;
	& > * {
	transition: all ease 0.4s;
	}
	&:hover > * {
	cursor: pointer;
	transition: all ease 0.4s;
	}
`;

export const CustomRightArrowPromoSlider = styled(CustomArrow)`
	background-color: 'inherit',
	position: 'absolute',
	top: '170px',
	left: '250px',
`;
