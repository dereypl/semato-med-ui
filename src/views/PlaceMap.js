import React from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import styled from 'styled-components'
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import PathContainer from "../components/molecules/Path/PathContainer";
import VisitContainer from "../components/organisms/Visit/VisitContainer";
import SidebarTemplate from "../templates/SidebarTemplate";


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

const MapWrapper = styled.div`
    height: 58vh;
    width: 100%;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    border-radius: 15px;
`;


const PlaceMap = () => (
    <>
        <BackgroundHeader/>
        <BackgroungShapeLighter smaller/>
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={'Lista Placówek'}/>
                </HeaderWrapper>
                <ContentWrapper>
                    <MapWrapper>
                        MAPA
                    </MapWrapper>
                </ContentWrapper>
            </PageWrapper>
        </SidebarTemplate>
    </>
);
export default PlaceMap;


