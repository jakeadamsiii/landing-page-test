import { createGlobalStyle } from "styled-components";
import breakpoints from "./breakpoints";

const GlobalStyles = createGlobalStyle`

    :root {
        --primary: #0B3B3C;
        --secondary: #E8EFE9;
        --line: #BDCDC5;
        --copyright: #6D8A83;
        --background: #a6b79f;
        --button: #7E0707;
        --white: #FFFFFF;
        --numbers: #F3F7F4;
    }

    html, body {
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 16px;
    }

    body {
        font-size: 1rem;
        font-family: TTNorms-Regular, BasisGrotesquePro, Arial, sans-serif;
        font-weight: 400;
        overflow-x: hidden;
        color: var(--primary);
    }
    
    p {
        font-size: 1rem;
        line-height: 1.4;
        overflow-wrap: break-word;
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
    }

    h1 {
        font-size: 1.5rem;
    }

    h2, h3 {
        font-size: 1.25rem;
    }

    h4, h5, h6 {
        font-size: 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
    }

  `;



  export default GlobalStyles;