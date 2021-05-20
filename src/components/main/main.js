import React from "react";
import { Switch, Route } from "react-router-dom"
import HomePage from "../pages/homePage";
import ContactPage from "../pages/contactPage";
import PortfolioPage from "../pages/portfolioPage";
import MainContent from "../main-content/main-content";
import Service from "../../service/service";

import "./main.css";
import {connect} from "react-redux";

const Main = ({ langValue, content}) => {
    const homePage = <HomePage />
    const portfolioPage = <PortfolioPage />
    const contactPage = <ContactPage />

    const service = new Service(content);
    const status = service.getData(langValue);
        
    return (
        <main className="main">
            <Switch>
                <Route exact path="/">
                    <MainContent
                        pageName="homePage"
                        bgUri="bg.jpg"
                        status={status.homePage.status}
                        innerElement={homePage}
                    />
                </Route>
                <Route path="/portfolio">
                    <MainContent
                        pageName="portfolioPage"
                        bgUri="portfolio-bg.jpg"
                        status={status.portfolioPage.status}
                        innerElement={portfolioPage}
                    />
                </Route>
                <Route path="/contact">
                    <MainContent
                        pageName="contactPage"
                        bgUri="contact-bg.jpg"
                        status={status.aboutPage.status}
                        innerElement={contactPage}
                    />
                </Route>
            </Switch>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        langValue: state.lang,
        content: state.data
    }
}

export default connect(mapStateToProps)(Main);