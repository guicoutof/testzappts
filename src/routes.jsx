import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from './pages/signin';
import SignUp from './pages/signup';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn} />        
                <Route exact path="/sign-up" component={SignUp} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
            </Switch>
        </BrowserRouter>
    );
}                                                                                                                                   