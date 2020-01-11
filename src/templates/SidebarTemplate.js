import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import Menu from "../components/organisms/Menu/Menu";
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import {Redirect} from "react-router-dom";
import {routes} from "../routes";
import {isUserLogged} from "../actions";

const AppWrapper = styled.div`
    width: 90%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
`;

const SidebarTemplate = ({children,currentUser}) => {

    if (!isUserLogged()) {
        return <Redirect to={routes.login}/>;
    }
    return (
        <>
            <BackgroundHeader/>
            <BackgroungShapeLighter smaller/>
            <AppWrapper>
                <Menu currentUser={currentUser}/>
                {children}
            </AppWrapper>
        </>
    )
};

SidebarTemplate.defaultProps = {
    isUserLogged: false,
};

const mapStateToProps = state => ({
    isUserLogged: state.isUserLogged,
    currentUser: state.currentUser
});

export default connect(
    mapStateToProps,
    null
)(SidebarTemplate);
