import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        font-size:62.5%;
        font-family: 'Manrope', sans-serif;
    }
    
    body{
        font-size:1.6rem;
    }
    ul,li{
        list-style:none;
    }
    h1{
        font-size: 3.4rem;
        font-weight: 700;
        letter-spacing: 1px;
    }
    h2{
        font-size: 2.4rem;
        font-weight: 700;
    }
    
`;
