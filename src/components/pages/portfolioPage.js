import React from "react";
import ProjectItem from "../project-item"

import "./portfolioPage.css";

const PortfolioPage = () => {

    const _imgUrl = `${process.env.PUBLIC_URL}/img/`;
    const imgClassName = "project-img_lg";

    const projects = [
        {
            url: "food.jpg",
            caption: "Food",
            href: "https://wejderd1.github.io/Food/index.html"
        },
        {
            url: "Mogo.jpg",
            caption: 'Mogo',
            href: "https://wejderd1.github.io/Mogo/index.html"
        },
        {
            url: "online-zoo.jpg",
            caption: "Online-zoo",
            href: "https://wejderD1.github.io/online-zoo/pages/first.html"
        },
        {
            url: "portfolio1.jpg",
            caption: "AboutMe",
            href: "https://wejderd1.github.io/portfolio1/index.html"
        }
    ]

    return (
        <>
            <div className="row justify-content-space-beetwen portfolio-container">
                {projects.map((elem, i) => {
                    const { url, caption, href } = elem;
                    return <ProjectItem 
                    url={_imgUrl + url} 
                    caption={caption} 
                    link={href} 
                    key={i} 
                    imgClass={imgClassName}
                    columCount={4}
                    />
                })}
            </div>
        </>
    )
}

export default PortfolioPage;