import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
// language=SCSS
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  a {
    color: black;
    font-family: "Helvetica Neue", Helvetica, Roboto, sans-serif;
    font-weight: 400;
    text-decoration: none !important;
  }
  
  a:hover {
    color: gray;
    text-decoration: underline gray !important;
  }
`;
