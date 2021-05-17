import React from "react";
import {Switch, Route} from "react-router-dom"
import HomePage from "../pages/homePage";
import ContactPage from "../pages/contactPage";
import PortfolioPage from "../pages/portfolioPage";
import AppHeader from '../app-header';

import "./app.css";

const App = () => {
    return (
        <div>
            <AppHeader />
            <Switch>
                <Route exact path="/" component={HomePage}>
                </Route>
                <Route path="/portfolio" component={PortfolioPage} >
                </Route>
                <Route path="/contact" component={ContactPage}>
                </Route>
            </Switch>
        </div>
    )
}
export default App;