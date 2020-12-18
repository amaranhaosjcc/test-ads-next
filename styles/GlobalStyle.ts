import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    button, input[type="submit"] {
        border: 0;
        outline: 0;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    body {
        background: #F2F2FA;
        color: #3D3D4D;
        font-family: Arial, Helvetica, sans-serif;
    }

    div#__next {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
        background: url('/githubBackground.svg') no-repeat 70% top;
        height: 100vh;
    }
`;