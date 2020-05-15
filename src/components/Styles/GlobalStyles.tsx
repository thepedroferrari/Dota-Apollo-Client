import { createGlobalStyle } from 'styled-components';
import background from '../../assets/images/bg-06.png';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Roboto:wght@300&display=swap');

  body {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
    background-attachment: fixed;
    background-color: #1B1E21;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: Roboto, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cinzel', serif;
  }
`;

export default GlobalStyles;