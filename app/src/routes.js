import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

//pages in routes
import Home from "./pages/home"
import Trade from "./pages/trade/index"
import Result from "./pages/result/index"

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                        <Home/>
                </Route>
                <Route exact path="/trade">
                        <Trade/>
                </Route>
                <Route exact path="/result">
                        <Result/>
                </Route>
            </Switch>   
        </BrowserRouter>
    )
}

export default Routes;