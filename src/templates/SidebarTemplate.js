import React from 'react';
import styled from 'styled-components';
import Menu from "../components/organisms/Menu/Menu";

const AppWrapper = styled.div`
    width: 90%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
`;

const SidebarTemplate = ({ children }) => (
    <AppWrapper>
        <Menu username={'Mateusz Derey'}/>
        {children}
    </AppWrapper>
);

export default SidebarTemplate;
