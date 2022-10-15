import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }  

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.backgroundPrimary};
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    color: ${props => props.theme.colorPrimary};
  }
  #root{
    max-width: 90rem;
    margin: 0 auto;
  }

  body, input, textarea, button {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  h1, h2, h3 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
