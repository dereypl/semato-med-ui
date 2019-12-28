import React from 'react';
import {connect, useSelector} from 'react-redux'
import styled from 'styled-components';
import Menu from "../components/organisms/Menu/Menu";
import BackgroundHeader from "../components/atoms/Shapes/BackgroundHeader";
import BackgroungShapeLighter from "../components/atoms/Shapes/BackgroungShapeLighter";
import PropTypes from "prop-types";
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

const SidebarTemplate = ({children,firstName,lastName}) => {

    if (!isUserLogged()) {
        return <Redirect to={routes.login}/>;
    }

    return (
        <>
            <BackgroundHeader/>
            <BackgroungShapeLighter smaller/>
            <AppWrapper>
                <Menu username={firstName+" "+lastName}/>
                {children}
            </AppWrapper>
        </>
    )
};

SidebarTemplate.defaultProps = {
    isUserLogged: false,
    firstName: "",
    lastName: "",
};

const mapStateToProps = state => ({
    isUserLogged: state.isUserLogged,
    firstName: state.currentUser? state.currentUser.firstName : "",
    lastName: state.currentUser? state.currentUser.lastName : "",
});

export default connect(
    mapStateToProps,
    null
)(SidebarTemplate);
