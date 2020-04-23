import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/signup" component={SignUp}></Route>
            </Switch>
        </BrowserRouter>
    );
}