import { createGlobalStyle } from 'styled-components';
import background from '../../assets/images/bg-06.png';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Open+Sans:wght@300&display=swap');

  :root {
    font-size: calc(1vw + 1vh + .5vmin);
    @media (min-width: 960px) {
      font-size: calc(1vw + .75vh + .25vmin);
    }
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * + * {
    margin-top: 1.5em;
  }

  body {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
    background-attachment: fixed;
    background-color: #1B1E21;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    font: 1rem/1.6 sans-serif;
  }

  img {
    font-family: sans-serif;
    font-weight: 300;
    height: auto;
    line-height: 2;
    position: relative;
    text-align: center;
  }

  img::before {
    content: "We're sorry, the image below is broken :(";
    display: block;
    margin-bottom: 10px;
  }

  img::after {
    content: "(url: " attr(src) ")";
    display: block;
    font-size: 12px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cinzel', serif;
    font-weight: 400;
  }
`;

export default GlobalStyles;