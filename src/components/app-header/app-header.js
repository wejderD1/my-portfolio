import React from "react";
import { Link } from "react-router-dom";

import "./app-header.css";

const AppHeader = () => {

    return (
        <header className="header">
            <div className="container">
                <ul className="nav header-nav">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link" aria-current="page">Home</Link>
                    </li>
                    <i className="bi bi-dash-lg" ></i>
                    <li className="nav-item">
                        <Link to={"/portfolio"} className="nav-link" aria-current="page">Portfolio</Link>
                    </li>
                    <i className="bi bi-dash-lg" ></i>
                    <li className="nav-item">
                        <Link to={"/contact"} className="nav-link" aria-current="page">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default AppHeader;