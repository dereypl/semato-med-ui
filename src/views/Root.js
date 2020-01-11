import React from 'react';
import AuthPage from './AuthPage';
import PlaceMap from './PlaceMap';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
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
import DashboardPhysician from "./DashboardPhysician";
import PrivateRoute from "../routes/PrivateRoute";

const {store,persistor} = configureStore();

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <MainTemplate>
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home} render={() => <Redirect to={routes.login}/>}/>
                <Route exact path={routes.login} render={() => <AuthPage authType="signIn"/>}/>
                <Route exact path={routes.reset_password} render={() => <AuthPage authType="passReset"/>}/>

                <PrivateRoute exact path={routes.dashboard} component={Dashboard} />
                <PrivateRoute exact path={routes.dashboardPhysician} component={DashboardPhysician} />
                <PrivateRoute exact path={routes.visit} component={Visit} />
                <PrivateRoute exact path={routes.departments} component={PlaceMap} />
                <PrivateRoute exact path={routes.profile} component={Profile} />
                <PrivateRoute exact path={routes.history} component={VisitHistory} />
                <PrivateRoute exact path={routes.password} component={ChangePassword} />
                <PrivateRoute exact path={routes.notifications} component={Notifications} />
                <PrivateRoute exact path={routes.request} component={ProblemRequest} />
            </Switch>
        </BrowserRouter>
    </MainTemplate>
        </PersistGate>
    </Provider>
);

export default Root;
