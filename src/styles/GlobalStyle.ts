import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  :root {
    --black: #000000;
    --white: #ffffff;

    --blue-600: #00A5C4;

    --yellow-400: #CBD736;

    --gray-100: #D3D3D3;
    --gray-300: #9F9F9F;
    --gray-400: #909090;
    --gray-500: #8C8C8C;
    --gray-600: #606060;
    --gray-700: #3e3e3e;
    --gray-750: #363636;
    --gray-800: #1E1E1E;
    --gray-900: #121214;
  }

  @media (max-width: 1000px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    color: var(--white);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Nunito", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
