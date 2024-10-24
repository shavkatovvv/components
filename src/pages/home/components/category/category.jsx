import React from "react";

export const Category = ({ id, img, title }) => {
    return (
        <div>
            <img src={img} alt="" />
            <h1>{title}</h1>
        </div>
    );
};
