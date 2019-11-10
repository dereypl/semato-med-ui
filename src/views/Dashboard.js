import React from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import Menu from "../components/organisms/Menu/Menu";
import Logo from "../components/atoms/Logo/Logo";
import styled from 'styled-components'


const PageWrapper = styled.div`
//background-color: red;
    width: 90%;
    margin: 0 auto;
`;

const HeaderShape = styled.div`
    background-color: ${({theme}) => theme.medColor};
    width: 100%;
    height: 25rem;
    position: absolute;
    z-index: -10;
    top:0;
`;

const Info = styled.p`
display: block;
width: 30rem;
color: white;
text-align: center;
font-size: 1rem;
`;


const Dashboard = () => (
    <>
        <HeaderShape/>
        <PageWrapper>
            <Logo smaller/>
            <Info>Najlepsza klinika na świecie, nie wiem czy wiecie.</Info>
            <BackgroungShapeLighter smaller/>
            <Menu/>
        </PageWrapper>
    </>
);
export default Dashboard;


