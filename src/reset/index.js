import { createGlobalStyle } from "styled-components";
import "./ReactToastify.css";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
    *{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        outline: none;

        font-family: 'Josefin Sans', sans-serif;
        font-size: 1em;

        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;

        --transition: all .2s ease-in;

        list-style: none;

        line-heigth: 2;

        -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none; 
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none;
    }
    [disabled]{
        color: inherit;
    }
    html, body{
        width: 100%;
        height: 100%;
    background: #0A0A0A;
    }
    input, button{
        background: transparent;
        font: inherit;
    }
    button{
        cursor: pointer;
    }
    .customized-toast{
        background: violet;
    }
`;
