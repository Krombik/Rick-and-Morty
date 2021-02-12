import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    &::-webkit-scrollbar {
      width: 8px;
      &-track {
        background: rgba(0,0,0,.1);
        border-radius: 5px;
      }
      &-thumb {
        background: rgba(0,0,0,.2);
        border-radius: 5px;
      }
    }
    &:focus {
      outline: none;
    }
  }
  body {
    min-width: 320px; 
  }
`;

export default GlobalStyle;
