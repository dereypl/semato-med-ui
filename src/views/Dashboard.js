import React from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import styled from 'styled-components'
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import PathContainer from "../components/molecules/Path/PathContainer";
import VisitContainer from "../components/organisms/Visit/VisitContainer";
import SidebarTemplate from "../templates/SidebarTemplate";


const PageWrapper = styled.div`
    width: 78%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    //padding-right: 5rem;
    //background-color: yellow;
`;

const HeaderWrapper = styled.div`
    height: 30rem;
    display: flex;
`;
const ContentWrapper = styled.div`
    width: 90%;
    height: auto;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    //background-color: red;
    justify-self: center;
    align-self: flex-start;
`;


//TODO: if user is not authenticate => redirect to login page


const Dashboard = () => (
    <>
        <BackgroundHeader/>
        <BackgroungShapeLighter smaller/>
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={'Zaplanowane wizyty'}/>
                </HeaderWrapper>
                <ContentWrapper>
                    <VisitContainer nearest={true}/>
                    <VisitContainer/>
                    <VisitContainer/>
                    <VisitContainer/>
                    <VisitContainer/>
                </ContentWrapper>
            </PageWrapper>
        </SidebarTemplate>
    </>
);
export default Dashboard;


