import styled from 'styled-components';

export const Wrapper = styled.div`
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
