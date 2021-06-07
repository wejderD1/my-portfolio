import React from "react";
import ProjectItem from "../project-item";
import { connect } from "react-redux";


import "./portfolioPage.css";

const PortfolioPage = ({projects}) => {

    const _imgUrl = `${process.env.PUBLIC_URL}/img/`;
    const imgClassName = "project-img_lg";

    return (
        <>
            <div className="row justify-content-space-beetwen portfolio-container">
                {projects.map((elem, i) => {
                    const { url, caption, href, code } = elem;
                    return <ProjectItem 
                    url={_imgUrl + url} 
                    caption={caption} 
                    link={href} 
                    code={code}
                    key={i} 
                    imgClass={imgClassName}
                    columCount={4}
                    />
                })}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        projects : state.projects
    }
}

export default connect(mapStateToProps)(PortfolioPage);