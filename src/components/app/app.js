import React from "react";
import Main from "../main";
import Footer from "../footer";
import AppHeader from '../app-header';

import "./app.css";

const App = () => {
    return (
        <div>
            <AppHeader />
            <Main />
            <Footer />
        </div>
    )
}

export default App;