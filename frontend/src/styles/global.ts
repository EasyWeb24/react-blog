import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: solid red 1px;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

body {
    position: relative;
}
`;
