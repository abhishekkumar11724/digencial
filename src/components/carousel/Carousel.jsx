import React from "react";
import "./carousel.css";
import VectorStar from "../../assets/VectorStar.png";
const Carousel = () => {
    return (
        <div className="digencial__carousel">
            <ul>
                <li>
                    <img src={VectorStar} alt="star" />
                    <p>WEB DEVELOPMENT</p>
                </li>
                <li>
                    <img src={VectorStar} alt="star" />
                    <p>UI/UX</p>
                </li>
                <li>
                    <img src={VectorStar} alt="star" />
                    <p>SOCIAL MEDIA</p>
                </li>
                <li>
                    <img src={VectorStar} alt="star" />
                    <p>WEB DEVELOPMENT</p>
                </li>
            </ul>
        </div>
    );
};

export default Carousel;
