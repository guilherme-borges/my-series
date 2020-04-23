import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./services/auth";

import Logon from './pages/Logon';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon}></Route>
            <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
            <Route path="/signup" component={SignUp}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
