import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
    background-repeat: none;
  }
`;
