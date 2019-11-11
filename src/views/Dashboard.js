import React from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import Menu from "../components/organisms/Menu/Menu";
import Logo from "../components/atoms/Logo/Logo";
import styled from 'styled-components'
import PlusesHalf from "../components/atoms/Shapes/PlusesHalf";
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import PathHeading from "../components/atoms/Heading/PathHeading";


const AppWrapper = styled.div`
    width: 90%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
`;

const PageWrapper = styled.div`
    width: 78%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const HeaderWrapper = styled.div`
    height: 30rem;
    display: flex;
`;
const ContentWrapper = styled.div`
    height: auto;
    display: flex;
`;




const Dashboard = () => (
    <>
        <BackgroundHeader/>
        <BackgroungShapeLighter smaller/>
        <AppWrapper>
            <Menu username={'Mateusz Derey'}/>
            <PageWrapper>
                <HeaderWrapper>xxxxxxx</HeaderWrapper>
                <ContentWrapper>xxxxxxx</ContentWrapper>
            </PageWrapper>
        </AppWrapper>
    </>
);
export default Dashboard;


