import React from "react";

export const Items = ({ id, title, img }) => {
    return (
        <div>
            <img src={img} alt="" />
            <h1>{title}</h1>
        </div>
    );
};
