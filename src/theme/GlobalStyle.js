import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,900&display=swap');
  
  
    *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }    
    
    html{
    font-size: 62.5%;
    }
    
    body{
    font-size: 1.6rem; // -> "happy rems"
    font-family: "Montserrat", sans-serif;
    width: 100%;
    height: auto;
    background-color: #F4F6F5;
    margin: 0;
    padding: 0;
    }
`;


export default GlobalStyle;