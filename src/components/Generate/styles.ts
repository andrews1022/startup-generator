import styled from 'styled-components';

export const GenerateWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.sinbad};
	border-radius: 1rem;
	box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
	margin: 3.5% auto;
	padding: 4.25%;
	text-align: center;
	width: 66%;

	@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
		width: 75%;
	}

	@media ${({ theme }) => theme.mediaQueries.mobileXLarge} {
		margin: 5% auto;
	}

	@media ${({ theme }) => theme.mediaQueries.mobileMedium} {
		width: 90%;
	}
`;

export const GenerateButton = styled.button`
	background-color: ${({ theme }) => theme.colors.spindle};
	border: none;
	border-radius: 4rem;
	cursor: pointer;
	font-size: 1.5rem;
	margin: 3rem 0 4rem 0;
	outline: none;
	padding: 1rem 2.5rem;
	transition: all 175ms ease-in-out;

	@media ${({ theme }) => theme.mediaQueries.mobileXLarge} {
		font-size: 1.375rem;
	}

	@media (hover) {
		&:hover {
			background-color: ${({ theme }) => theme.colors.poloBlue};
			box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
			transform: translateY(-0.25rem);
		}

		&:active {
			transform: translateY(0.25rem);
		}
	}
`;
