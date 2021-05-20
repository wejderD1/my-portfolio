import React from "react";
import Avatar from "../avatar";
import { connect } from "react-redux";
import Service from "../../service/service";

import "./contactPage.css";

const ContactPage = ({ langValue, data }) => {

    const service = new Service(data);
    const aboutData = service.getData(langValue).aboutPage.aboutMe;

    const titleList = []
    const contentList = []
    
    for (const key in aboutData) {
        if (Object.hasOwnProperty.call(aboutData, key)) {
            const element = aboutData[key];
            titleList.push(element["title"])
            contentList.push(element["content"])
        }
    }

const _imgUrl = `${process.env.PUBLIC_URL}/img/`;

return (
    <div className="container">
        <Avatar url={_imgUrl + "avatar.jpg"} />
        <div className="about-me">
            {titleList.map((elem, i) => {
                return (
                    <div className="about-me__item" key={i}>
                        <h2 className="about-me__title">{elem}</h2>
                        {contentList[i].map((elem, ii) => <p key={ii}>{elem}</p>)}
                    </div>
                )
            })}
        </div>
        <div className="contact-container jumbotron">
            <h1>Contacts:</h1>
            <p>97-500 Radomsko</p>
            <p><span>tel: </span>798-613-331</p>
            <p><span>email: </span>wejderd1@gmail.com</p>
            <a
                href="https://www.facebook.com/yuriy.gnatuyk"
                className="btn btn-social-icon btn-facebook"
                target="_blank" rel="noreferrer"
            >
                <span className="fa fa-facebook"></span>
            </a>
        </div>
    </div>
)
}

const mapStateToProps = (state) => {
    return {
        langValue: state.lang,
        data: state.data
    }
}

export default connect(mapStateToProps)(ContactPage);