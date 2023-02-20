import React from "react";
import "./card.css";

const Card = ({ title, boldText, text, year, background, OINP }) => {
    const digencial__card_styles = {
        backgroundColor: `${background}`,
    };
    return (
        <div className={`digencial__card ${title}`} style={digencial__card_styles}>
            <h3>{title}</h3>
            <p className="digencial__card-content">
                <span>{boldText}</span>
                {text}
            </p>
            <h4>{year}</h4>
            {OINP && OINP}
        </div>
    );
};

export default Card;
