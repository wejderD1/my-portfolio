import React from "react";

const Avatar = ({url}) => {
    return (
        <div className="avatar">
                <img className="avatar-photo" src={url} alt="avatar"></img>
                <div className="name-desc-wrap">
                    <h2 className="avatar-name">Yurii Hnatiuk</h2>
                    <p className="avatar-desc">Web developer</p>
                </div>
            </div>
    )
}

export default Avatar;