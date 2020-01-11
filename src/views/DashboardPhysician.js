import React, {useEffect} from 'react'
import styled from 'styled-components'
import PathContainer from "../components/molecules/Path/PathContainer";
import VisitContainer from "../components/organisms/Visit/VisitContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import {fetchItems} from "../actions";
import {GET_VISITS_LIST_PHYSICIAN} from "../actions/requestTypes";
import {connect} from "react-redux";
import MENU_ITEMS from "../assets/MenuItems";
import {routes} from "../routes";
import {Redirect} from "react-router-dom";

const PageWrapper = styled.div`
    width: 78%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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
    justify-self: center;
    align-self: flex-start;
`;

const DashboardPhysician = ({fetchVisits, visitList,currentUser}) => {

    useEffect(() => {
        fetchVisits()
    }, [fetchVisits]);

    if(currentUser.role!=="ROLE_PHYSICIAN") return <Redirect to={routes.login}/>;

    return (
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={MENU_ITEMS.VisitsPhysician[0].option}
                                   pathInfo={"Wizyty zaplanowane przez twoich pacjentów"}
                                   pathIcon={MENU_ITEMS.Visits[0].pathIcon}/>
                </HeaderWrapper>
                <ContentWrapper>
                    {visitList.map(visit => <VisitContainer visit={visit} key={visit.id} actionType={'physician'}/>)}
                </ContentWrapper>
            </PageWrapper>
        </SidebarTemplate>
    )
};
const mapStateToProps = state => ({visitList: state.visitList, currentUser: state.currentUser});

const mapDispatchToProps = dispatch => ({
    fetchVisits: () => dispatch(fetchItems(GET_VISITS_LIST_PHYSICIAN)),
});

DashboardPhysician.defaultProps = {
    visitList: [],
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DashboardPhysician);


