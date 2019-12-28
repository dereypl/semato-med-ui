import React from 'react';
import { useSelector } from 'react-redux'
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

const SidebarTemplate = ({children}) => {

    const firstName = useSelector(state => state.currentUser.firstName);
    const lastName = useSelector(state => state.currentUser.lastName);
    return (
        <>
            <BackgroundHeader/>
            <BackgroungShapeLighter smaller/>
            <AppWrapper>
                <Menu username={firstName+" "+lastName}/>
                {children}
            </AppWrapper>
        </>
    )
};

export default SidebarTemplate;
