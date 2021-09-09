import styled from "styled-components";

export const Wrapper = styled.button`
	display: block;
	background: var(--darkGrey);
	width: 25%;
	min-width: 200px;
	height: 50px;
	border-radius: 30px;
	border: 0;
	color: var(--white);
	margin: 20px auto;
	font-size: var(--fontMed);
	outline: none;
	cursor: pointer;
	transition: all 0.2s;

	:hover {
		opacity: 0.8;
	}
`;
