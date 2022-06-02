import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        max-width: 90%;
        background: #f0f0f5;
        margin: 0 auto;
    }
    a {
        text-decoration: none;    
        color: #000;    
    }
    a:visited {
        color: #000;
    }
`

export default GlobalStyle