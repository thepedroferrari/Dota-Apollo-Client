import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Roboto:wght@300&display=swap');

  body {
    background-color: #1B1E21;
    font-family: Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cinzel', serif;
  }
`;

export default GlobalStyles;