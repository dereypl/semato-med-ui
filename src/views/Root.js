import React from 'react';
import logo from '../../images/bg.svg';
import styled from 'styled-components'
import GlobalStyle from "../../theme/GlobalStyle"
import {ThemeProvider} from 'styled-components'
import {theme} from "../../theme/mainTheme";
import Input from "../../components/atoms/Input/Input"
import {BrowserRouter} from "react-router-dom";


const Root = () => (
    <div>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <>
                <h1>Hello</h1>
                <p>Test</p>
                <Input placeholder="elo"></Input>
            </>
        </ThemeProvider>
    </div>

);


export default Root;
