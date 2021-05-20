import React from "react";
import { Link } from "react-router-dom";

import "./burger-menu.css";

const BurgerMenu = () => {
    return (
        <div className="container burger-menu">
            <input id="toggle" type="checkbox" />

            <label className="toggle-container" htmlFor="toggle">
                <span className="button button-toggle"></span>
            </label>
            <nav className="burger-wrap">
                <Link to="/" className="nav-link" aria-current="page">home</Link>
                <Link to="/portfolio" className="nav-link" aria-current="page">portfolio</Link>
                <Link to="/contact" className="nav-link" aria-current="page">contact</Link>
            </nav>
        </div>
    )
}

export default BurgerMenu;