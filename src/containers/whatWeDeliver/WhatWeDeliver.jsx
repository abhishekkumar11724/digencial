import React from "react";
import VectorStar from "../../assets/VectorStar.png";
import WhatWeDeliver_img from "../../assets/WhatWeDeliver_img.png";
import "./whatWeDeliver.css";
const WhatWeDeliver = () => {
    return (
        <div className="digencial__wwd section__padding" id="AboutUs">
            <div className="digencial__wwd-heading">
                <p>
                    <h2>WHAT </h2>
                    <h2> WE DELIVER</h2>
                </p>
                <div>
                    <img src={WhatWeDeliver_img} alt="what we deliver img" />
                </div>
            </div>
            <div className="digencial__wwd-content">
                <div>
                    <h3>1</h3>
                    <div>
                        <p>
                            <span>Customized digital solutions: </span>
                            We understand that every business is unique, and we
                            strive to deliver tailored solutions that meet the
                            specific needs and goals of each of our clients
                        </p>
                    </div>
                    <img src={VectorStar} alt="star" />
                </div>
                <div>
                    <h3>2</h3>
                    <div>
                        <p>
                            <span>Comprehensive services: </span>
                            Our digital agency offers a full range of services
                            from website design and development to search engine
                            optimization and social media marketing to help
                            businesses grow and succeed in the digital world.
                        </p>
                    </div>
                    <img src={VectorStar} alt="star" />
                </div>
                <div>
                    <h3>3</h3>
                    <div>
                        <p>
                            <span>Proven results: </span>
                            Our team is dedicated to delivering tangible results
                            for our clients. We use data-driven strategies and
                            techniques to ensure that our efforts are making a
                            positive impact on your business.
                        </p>
                    </div>
                    <img src={VectorStar} alt="star" />
                </div>
            </div>
        </div>
    );
};

export default WhatWeDeliver;
