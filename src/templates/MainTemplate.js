import React from 'react';
import GlobalStyle from "../theme/GlobalStyle"
import styled, {ThemeProvider} from 'styled-components'
import {theme} from "../theme/mainTheme";
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import Menu from "../components/organisms/Menu/Menu";


const MainTemplate = ({children}) => (
    <div>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
                {children}
        </ThemeProvider>
    </div>

);
export default MainTemplate;
