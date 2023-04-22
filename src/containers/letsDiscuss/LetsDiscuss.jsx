import React from "react";
import { OINP } from "../../components";
import VectorOpenInNew_orange from "../../assets/VectorOpenInNew_orange.png";
import LetsDiscuss_Idea from "../../assets/LetsDiscuss_Idea.png";
import Vector3Stars from "../../assets/Vector3Stars.png";
import forwardURL_img from "../../assets/forwardURL_img.png";
import "./letsDiscuss.css";

const LetsDiscuss = () => {
    return (
        <div className="digencial__letsDiscuss section__margin">
            <div className="digencial__letsDiscuss-content">
                <div className="digencial__letsDiscuss-content_heading">
                    <img src={Vector3Stars} alt="three stars" />
                    <h2>Let’s Discuss Your Ideas</h2>
                </div>
                <div className="digencial__letsDiscuss-content_links">
                    <a href="https://forms.gle/YjekLVjBVg59NXg28">
                        <OINP
                            text="Discuss Now"
                            background="white"
                            borderColor="white"
                            textColor="#FF8A00"
                            width={229}
                            image={VectorOpenInNew_orange}
                        />
                    </a>
                    <p>24 Hour Response guaranteed</p>
                </div>
            </div>
            <div className="digencial__letsDiscuss-image">
                <img src={LetsDiscuss_Idea} alt="lets discuss idea" />
            </div>
            <div className="digencial__letsDiscuss-forwardLink">
                <a href="https://forms.gle/YjekLVjBVg59NXg28">
                    <img src={forwardURL_img} alt="open in new window" />
                </a>
            </div>
        </div>
    );
};

export default LetsDiscuss;
