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
    color: ${(props) => props.theme.colorPrimary};
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

  a, :link{
    color: white;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  ::placeholder{
    font-size: 1.3rem;
  }

  select{
    color: ${(props) => props.theme.colorPrimary};
    border: 2px solid ${(props) => props.theme.grayPrimary};
    height: 4.5rem;
    font-size: 1.6rem;
    background: ${(props) => props.theme.backgroundPrimary};
    padding-left: 1rem;
    border-radius: 10px;
    transition: 0.2s;

    &:focus,
    :hover {
      color: black;
      box-shadow: 0 0 0 2px ${(props) => props.theme.yellowLight};
      outline: none;
      border: 1px solid ${(props) => props.theme.yellowDark};
      background: ${(props) => props.theme.colorPrimary};
      }
    }
`;
