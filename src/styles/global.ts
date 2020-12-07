import { createGlobalStyle } from 'styled-components';

import luffyBackground from '../assets/luffy.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff url(${luffyBackground})  no-repeat 70% -82px;
    -webkit-font-smoothing: antialiased; //fonte mais detalhada no chrome

  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 1230px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
