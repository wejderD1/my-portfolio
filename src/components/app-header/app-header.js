import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { langTroggle } from "../../service/actions";
import Service from "../../service/service";

import "./app-header.css";

const AppHeader = ({ langValue, langTroggle, content }) => {

    const service = new Service(content);
    const headerList = service.getData(langValue).header.menu;

    const links = ["/", "/portfolio", "/contact"];

    // получение данных со стейта (в зависсимости от значения переменной langValue)
    const menu = headerList.map((elem, i) => <View link={links[i]} title={elem} key={i} />)

    /**
     * нажатие на кнопки смены языков
     * @param {value} value 
     */
    const changeLang = (value) => {
        langTroggle(value) //изменяю значение языка в стейте
    }


    return (
        <header className="header">
            <div className="container">
                <div className="align-items-center d-flex justify-content-between">
                    <ul className="nav header-nav ">
                        {menu}
                    </ul>
                    <div className="lang-btn-container">
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input
                                checked={langValue === "eng"}
                                onChange={(e) => changeLang(e.target.value)}
                                type="radio"
                                className="btn-check"
                                name="btn1"
                                id="btn-radio1"
                                autoComplete="off"
                                value="eng"
                            />
                            <label className="btn btn-sm btn-outline-light lang-btn" htmlFor="btn-radio1">eng</label>
                            <input
                                checked={langValue === "pol"}
                                type="radio"
                                onChange={(e) => changeLang(e.target.value)}
                                className="btn-check"
                                name="btn1"
                                id="btn-radio2"
                                autoComplete="off"
                                value="pol"
                            />
                            <label className="btn btn-sm btn-outline-light lang-btn" htmlFor="btn-radio2">pol</label>
                        </div>
                    </div>
                </div>

                <div className="social-block">
                    <a
                        href="https://www.facebook.com/yuriy.gnatuyk"
                        className="btn btn-social-icon btn-facebook"
                        target="_blank" rel="noreferrer"
                    >
                        <span className="fa fa-facebook"></span>
                    </a>
                </div>
            </div>
        </header>

    )
}

const View = ({ title, link }) => {
    return (
        <>
            <li className="nav-item">
                <Link to={link} className="nav-link" aria-current="page">{title}</Link>
            </li>
            <i className="bi bi-dash-lg" ></i>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        langValue: state.lang,
        content: state.data,
    }
};

const mapDispatchToProps = {
    langTroggle,
    // langLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);