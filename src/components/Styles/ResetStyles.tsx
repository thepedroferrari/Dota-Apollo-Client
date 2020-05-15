import { css, createGlobalStyle } from 'styled-components';

// Modified from http://meyerweb.com/eric/tools/css/reset/
export const reset = css`
  html, body, div, span,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, address, img, kbd,
  small, strong, sub, sup,ul, li,
  article, details, footer, header,
  main, nav, section, summary,
  time, mark {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
`;

export const ResetStyles = createGlobalStyle`${reset}`;
