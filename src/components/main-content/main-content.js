import React from "react";

const MainContent = ({pageName, status, bgUri, innerElement}) => {

    const _imgUrl = `${process.env.PUBLIC_URL}/img/`;    

    return (
        <section className={`${pageName}Page`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col status">{status}</div>
                </div>
            </div>
            <img className="home-bg" src={_imgUrl + bgUri} alt="background-img" ></img>
            <div className="container-md">
               {innerElement} 
               {/* вставлется часть страницы которая лежит в папке /pages */}
            </div>
        </section >
    )
}

export default MainContent;