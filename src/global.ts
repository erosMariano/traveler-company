import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,html,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-family: "Montserrat Alternates", sans-serif;
  }
  .container{
    max-width: 1032px;
    padding-left:16px;    
    padding-right:16px;
    width: 100%;
    margin: 0 auto;
  }
`;
