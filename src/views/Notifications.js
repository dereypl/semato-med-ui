import React, {useEffect} from 'react'
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import styled from 'styled-components'
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import PathContainer from "../components/molecules/Path/PathContainer";
import SidebarTemplate from "../templates/SidebarTemplate";
import MENU_ITEMS from "../assets/MenuItems";
import NotificationContainer from "../components/organisms/Notification/NotoficationContainer";
import {fetchItems} from "../actions";
import {GET_NOTIFICATIONS_LIST} from "../actions/requestTypes";
import {connect} from "react-redux";

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

const Notifications = ({fetchNotifications,notificationList}) => {

    useEffect(() => {
        fetchNotifications()
    }, [fetchNotifications]);
    return(
    <>
        <BackgroundHeader/>
        <BackgroungShapeLighter smaller/>
        <SidebarTemplate>
            <PageWrapper>
                <HeaderWrapper>
                    <PathContainer path={MENU_ITEMS.System[0].option} pathIcon={MENU_ITEMS.System[0].pathIcon}
                                   pathInfo={"Najnowsze powiadomienia systemowe"}/>
                </HeaderWrapper>
                <ContentWrapper>
                    {notificationList.map( (notification) => <NotificationContainer key={notification.id} notification={notification}/>)}
                </ContentWrapper>
            </PageWrapper>
        </SidebarTemplate>
    </>
)};
const mapStateToProps = state => ({notificationList: state.notificationList});

const mapDispatchToProps = dispatch => ({
    fetchNotifications: () => dispatch(fetchItems(GET_NOTIFICATIONS_LIST)),
});

Notifications.defaultProps = {
    notificationList: [],
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Notifications);



