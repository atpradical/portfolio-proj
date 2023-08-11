import {createGlobalStyle} from "styled-components";
import {theme} from "styles/Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;

    min-width: 300px;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.normalFont};
    font-family: DM Sans, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: unset;
    cursor: pointer;
    color: ${theme.colors.titleFont};
    border: 1px solid ${theme.colors.titleFont};
  }

  section {
    background-color: ${theme.colors.primary};
    padding: 50px 0;

    @media ${theme.media.mobile} {
      padding: 30px 0;
    }
  }

  h3 {
    color: ${theme.colors.cardTitleFont};
    font-size: 20px;
    font-weight: 400;
  }

  p {
    color: ${theme.colors.lightFont};
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
  }
`
