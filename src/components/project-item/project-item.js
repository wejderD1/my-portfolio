import React from "react";

const ProjectItem = ({ url, caption, link, imgClass, code }) => {
    return (
        <div className={`col my-work-items`}>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <img className={imgClass} src={url} alt="project-img" />
                <p>{caption} / <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                > kody źródłowe</a></p> 
            </a>

        </div>
    )
}

export default ProjectItem;