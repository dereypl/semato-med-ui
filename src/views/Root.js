import React from 'react';
import AuthPage from './AuthPage';
import PlaceMap from './PlaceMap';
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import {routes} from "../routes";
import Dashboard from "./Dashboard";


const Root = () => (
    <MainTemplate>
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home} render={() => <Redirect to={routes.login}/>}/>
                <Route exact path={routes.login} render={() => <AuthPage authType="signIn"/>}/>
                <Route exact path={routes.dashboard} component={Dashboard} />
                <Route exact path={routes.departments} component={PlaceMap} />
            </Switch>
        </BrowserRouter>
    </MainTemplate>
);


export default Root;
