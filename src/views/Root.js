import React from 'react';
import AuthPage from './AuthPage';
import PlaceMap from './PlaceMap';
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import {routes} from "../routes";
import Dashboard from "./Dashboard";
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react'
import configureStore from "../store/configureStore";
import Visit from "./Visit";
import Profile from "./Profile";
import VisitHistory from "./VisitHistory";
import ChangePassword from "./ChangePassword";
import Notifications from "./Notifications";
import ProblemRequest from "./ProblemRequest";

const {store,persistor} = configureStore();

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <MainTemplate>
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home} render={() => <Redirect to={routes.login}/>}/>
                <Route exact path={routes.login} render={() => <AuthPage authType="signIn"/>}/>
                <Route exact path={routes.dashboard} component={Dashboard} />
                <Route exact path={routes.visit} component={Visit} />
                <Route exact path={routes.departments} component={PlaceMap} />
                <Route exact path={routes.profile} component={Profile} />
                <Route exact path={routes.history} component={VisitHistory} />
                <Route exact path={routes.password} component={ChangePassword} />
                <Route exact path={routes.notifications} component={Notifications} />
                <Route exact path={routes.request} component={ProblemRequest} />
            </Switch>
        </BrowserRouter>
    </MainTemplate>
        </PersistGate>
    </Provider>
);


export default Root;
