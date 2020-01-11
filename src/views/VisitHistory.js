import React, {useEffect} from 'react'
import styled from 'styled-components'
import PathContainer from "../components/molecules/Path/PathContainer";
import VisitContainer from "../components/organisms/Visit/VisitContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import {fetchItems} from "../actions";
import {GET_VISITS_LIST} from "../actions/requestTypes";
import {connect} from "react-redux";
import MENU_ITEMS from "../assets/MenuItems";

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

const VisitHistory = ({fetchVisits, visitList}) => {

    useEffect(() => {
        fetchVisits()
    }, [fetchVisits]);

    return (
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={MENU_ITEMS.Patient[1].option} pathInfo={"Lista Twoich 10 ostatnich wizyt "} pathIcon={MENU_ITEMS.Patient[1].pathIcon}/>
                </HeaderWrapper>
                <ContentWrapper>
                    {visitList.map(visit => <VisitContainer visit={visit} key={visit.id} actionType={'past'}/>)}
                </ContentWrapper>
            </PageWrapper>
        </SidebarTemplate>
    )
};
const mapStateToProps = state => ({visitList: state.visitList});

const mapDispatchToProps = dispatch => ({
    fetchVisits: () => dispatch(fetchItems(GET_VISITS_LIST, {mode: 'past'})),
});

VisitHistory.defaultProps = {
    visitList: [],
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VisitHistory);


