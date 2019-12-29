import React from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import styled from 'styled-components'
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import PathContainer from "../components/molecules/Path/PathContainer";
import VisitContainer from "../components/organisms/Visit/VisitContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import MENU_ITEMS from "../assets/data_hardcoded";
import SimpleMap from "../components/organisms/Map/SimpleMap";

const PageWrapper = styled.div`
    width: 78%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-right: 5rem;
`;

const HeaderWrapper = styled.div`
    height: 30rem;
    display: flex;
`;
const ContentWrapper = styled.div`
    height: auto;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
`;



const ProblemRequest = () => (
    <>
        <BackgroundHeader/>
        <BackgroungShapeLighter smaller/>
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={MENU_ITEMS.System[1].option} pathInfo={"Wypełnij formularz, aby zgłosić problem"} pathIcon={MENU_ITEMS.System[1].pathIcon}/>
                </HeaderWrapper>
                <ContentWrapper>
                    ProblemRequest
                </ContentWrapper>
            </PageWrapper>
        </SidebarTemplate>
    </>
);
export default ProblemRequest;


