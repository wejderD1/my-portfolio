import React from "react";

const ProjectItem = ({ url, caption, link, imgClass, columCount}) => {
    return (
        <div className={`col my-work-items`}>
            <a href={link} target="_blank" rel="noreferrer">
                <img className={imgClass} src={url} alt="project-img" />
                <p>{caption}</p>
            </a>
        </div>
    )
}

export default ProjectItem;