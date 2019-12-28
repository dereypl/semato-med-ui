import React from 'react';
import styled from 'styled-components';
import Menu from "../components/organisms/Menu/Menu";
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";

const AppWrapper = styled.div`
    width: 90%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
`;

const SidebarTemplate = ({children}) => (
    <>
        <BackgroundHeader/>
        <BackgroungShapeLighter smaller/>
        <AppWrapper>
            <Menu username={'Mateusz Derey'}/>
            {children}
        </AppWrapper>
    </>
);

export default SidebarTemplate;
