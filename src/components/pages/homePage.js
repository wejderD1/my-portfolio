import React from "react";
import ProjectItem from "../project-item";
import Avatar from "../avatar";
import { connect } from "react-redux";
import Service from "../../service/service";

import "./homePage.css";

const HomePage = ({ langValue, data, projects }) => {
    const service = new Service(data);

    const _imgUrl = `${process.env.PUBLIC_URL}/img/`;
    const imgClassName = "project-img";
    const comment = service.getData(langValue).homePage;

    return (
        <>
            <Avatar url={_imgUrl + "avatar.jpg"} />
            <div className="container-fluid row">
                <div className="col-12 col-md-6">
                    <h2 className="title home-title">JavaScript, Bootstrap & React</h2>
                    <p className="content home-content">{comment.comment1}</p>
                    <p className="content home-content">{comment.comment2}</p>

                </div>
                <div className="col-12 col-md-6">
                    <h2 className="title home-title">My last projects</h2>
                    <div className="row">
                        {projects.map((elem, i) => {
                            const { url, caption, href, code } = elem;
                            return <ProjectItem
                                url={_imgUrl + url}
                                caption={caption}
                                link={href}
                                code={code}
                                key={i}
                                imgClass={imgClassName}
                            />
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        langValue: state.lang,
        data: state.data,
        projects: state.projects
    }
}

export default connect(mapStateToProps)(HomePage);