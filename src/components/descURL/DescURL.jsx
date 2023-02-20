import React from "react";
import "./descURL.css";
const DescURL = ({
    text,
    descText,
    textSize,
    descTextSize,
    image,
    imageWidth,
    width,
}) => {
    //  console.log(textSize, descTextSize, imageWidth, )
    return (
        <div className="digencial__descURL" style={{ width: `${width}px` }}>
            <h3 style={{ fontSize: `${textSize}px` }}>{text}</h3>
            <p style={{ fontSize: `${descTextSize}px` }}>
                {descText}
                <img
                    src={image}
                    alt="hyperlink"
                    style={{ width: `${imageWidth}px` }}
                />
            </p>
        </div>
    );
};

export default DescURL;
