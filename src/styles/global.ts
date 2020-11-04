import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--primary);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', cursive;
  }

  span {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary: #4587EB;
    --primaryDark: #114ba2;
    --secondary: #EB5BB0;
    --secondaryDark: #fc7320;
    --white: #fff;
    --gray: #8a8c90;
    --black: #000000;

    --success: #c0f2d7;
    --successDark: #33D47E;

    --warning: #fff0b3;
    --warningDark: #e6b800;

    --error: #f2c0c0;
    --errorDark: #d43535;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--quaternary);
  }

  ::-webkit-scrollbar {
      width: 10px;
      background: var(--senary);
  }

  ::-webkit-scrollbar-thumb {
      background: var(--senary);
  }
`;
