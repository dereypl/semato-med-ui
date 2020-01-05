import React, {useEffect} from 'react'
import styled from 'styled-components'
import PathContainer from "../components/molecules/Path/PathContainer";
import VisitContainer from "../components/organisms/Visit/VisitContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import {fetchItems} from "../actions";
import {GET_VISITS_LIST} from "../actions/requestTypes";
import {connect} from "react-redux";
import MENU_ITEMS from "../assets/data_hardcoded";
import {routes} from "../routes";
import {Redirect} from "react-router-dom";
import Paragraph from "../components/atoms/Paragraph/Paragraph";


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


const Dashboard = ({fetchVisits, visitList,currentUser}) => {


    useEffect(() => {
        fetchVisits()
    }, [fetchVisits]);

    if(currentUser.role==="ROLE_PHYSICIAN") return <Redirect to={routes.dashboardPhysician}/>;

    return (
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={MENU_ITEMS.Visits[0].option}
                                   pathInfo={`Najbliższa konsultacja: ${visitList[0]? new Date(visitList[0].dateTimeStart).toLocaleDateString().slice(0,10) +" "+ visitList[0].specialityName : " "} `}
                                   pathIcon={MENU_ITEMS.Visits[0].pathIcon}/>
                </HeaderWrapper>
                <ContentWrapper>

                    {visitList.length? visitList.map(visit => <VisitContainer visit={visit} key={visit.id} actionType={'cancel'} actionDesc={'Odwołaj wizytę'} past={false}/>) :
                        <Paragraph>Obecnie brak umówionych konsultacji. Przejdz do zakładki 'Umów wiztę' aby dokonać rezerwacji terminu.</Paragraph>}
                </ContentWrapper>
            </PageWrapper>
        </SidebarTemplate>
    )
};
const mapStateToProps = state => ({visitList: state.visitList, currentUser: state.currentUser});

const mapDispatchToProps = dispatch => ({
    fetchVisits: () => dispatch(fetchItems(GET_VISITS_LIST, {mode: 'future'})),
});

Dashboard.defaultProps = {
    visitList: [],
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);


