import { createGlobalStyle } from "styled-components";
import theme from "./theme";

// destructured theme properties
const { colors, fonts, mediaQueries, shades } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;

    @media ${mediaQueries.desktopSmall} {
		  font-size: 87.5%;
    }
  }

  body {
    background-color: ${colors.bermuda};
    color: ${shades.white};
	  font-family: ${fonts.roboto};
    line-height: 1;
    text-align: center;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    color: inherit;
    font-size: inherit;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  button, 
  input, 
  textarea {
    font-family: ${fonts.roboto};
  }

  img,
  svg {
    border: 0;
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
    }

    &:hover,
    &:active {
      outline: 0;
    }
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  audio,
  canvas,
  video {
    display: inline-block;
    max-width: 100%;
    zoom: 1;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    @media ${mediaQueries.tabletPortrait} {
      align-items: flex-start;
    }
  }
`;

export default GlobalStyle;
