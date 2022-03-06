import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: clamp(5rem, 5vw, 6rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 0.5rem;

  @media ${({ theme }) => theme.mediaQueries.mobileMedium} {
    margin-top: 7.5%;
  }
`;
