import React from 'react';
import AuthPage from './AuthPage';
import Dashboard from './Dashboard';
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import {routes} from "../routes";


const Root = () => (

    <MainTemplate>
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.login} render={() => <AuthPage authType="signIn"/>}/>
                {/*<Route exact path={routes.home} render={() => <Redirect to={routes.patient}/>}/>*/}

                <Route exact path={routes.home} component={Dashboard} />
            </Switch>
        </BrowserRouter>
    </MainTemplate>
);


export default Root;
