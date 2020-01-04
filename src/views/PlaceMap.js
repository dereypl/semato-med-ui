import React from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import styled from 'styled-components'
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import PathContainer from "../components/molecules/Path/PathContainer";
import VisitContainer from "../components/organisms/Visit/VisitContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import MENU_ITEMS from "../assets/data_hardcoded";
import SimpleMap from "../components/organisms/Map/SimpleMap";

import map from "../assets/images/semato_map.png";

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
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    border-radius: 15px;
    background-image: url(${map});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   
`;

const PlaceMap = () => (
    <>
        <BackgroundHeader/>
        <BackgroungShapeLighter smaller/>
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={MENU_ITEMS.Visits[2].option} pathIcon={MENU_ITEMS.Visits[2].pathIcon} pathInfo={"Zlokalizuj nasze placówki na mapie"}/>
                </HeaderWrapper>
                <ContentWrapper>
                    <MapWrapper>
                        {/*<SimpleMap/>*/}
                    </MapWrapper>
                </ContentWrapper>
            </PageWrapper>
        </SidebarTemplate>
    </>
);
export default PlaceMap;


