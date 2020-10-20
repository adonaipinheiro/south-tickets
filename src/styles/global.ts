import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    --white: #fff;
    --gray: #8a8c90;
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
