import React, {useEffect} from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import styled from 'styled-components'
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import PathContainer from "../components/molecules/Path/PathContainer";
import VisitContainer from "../components/organisms/Visit/VisitContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import calendar_top from "../assets/icons/calendar_top.svg"
import {fetchItems} from "../actions";
import {GET_SPECIALITY_LIST, GET_VISITS_LIST} from "../actions/requestTypes";
import {connect} from "react-redux";


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


const Dashboard = ({fetchVisits, visitList}) => {

    useEffect(() => {
        fetchVisits()
    }, [fetchVisits]);

    return (
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={'Zaplanowane wizyty'}
                                   pathInfo={"Najbliższa wizyta: 15.11 Konsultacja kardiologiczna"}
                                   pathIcon={calendar_top}/>
                </HeaderWrapper>
                <ContentWrapper>

                    {visitList.map(visit => <VisitContainer visit={visit}/>)}
                    {/*<VisitContainer nearest={true}/>*/}

                </ContentWrapper>
            </PageWrapper>
        </SidebarTemplate>
    )
};
const mapStateToProps = state => ({visitList: state.visitList});

const mapDispatchToProps = dispatch => ({
    fetchVisits: () => dispatch(fetchItems(GET_VISITS_LIST)),
});

Dashboard.defaultProps = {
    visitList: [],
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);


