import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-weight: normal;
}

  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
   
  input {
    -webkit-appearance: none;
  }
   
  button,
  input {
    border: none;
    background: none;
    outline: none;
    color: inherit;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  ul {
    list-style: none;
  }
  body {
    font: 1rem/1.3 "Roboto", sans-serif;
    background: var(--bg_main);
    color: var(--text_dark);
    padding: 70px;
  }
`


  
  
  
  

 