import React from "react";
import centerImage from "../../assets/centerImage.png";
import VectorOpenInNew_b from "../../assets/VectorOpenInNew_b.png";
import VectorOpenInNew_w from "../../assets/VectorOpenInNew_w.png";
import VectorCrown from "../../assets/VectorCrown.png";
import "./header.css";
import { OINP } from "../../components";

const Tag = (props) => {
    <>
        <div className="tag">
            <button>
                <p>{props.text}</p>
                <img src={props.image} alt="tag img" />
            </button>
        </div>
    </>;
};

const Header = () => {
    return (
        <div className="digencial__header section__padding">
            <div className="digencial__header-content">
                <div className="digencial__header-content_heading">
                    <h2>Digencial</h2>
                    <p>
                        Turning your imagination into reality in the digital
                        world.
                    </p>
                </div>
                <div className="digencial__header-content_desc">
                    <p>
                        We provide a range of digital solutions to help
                        businesses grow and succeed in the digital world.
                    </p>
                    <div className="digencial__header-content_desc-tags">
                        {/* <Tag text="START PROJECT" image={VectorOpenInNew_b}/> */}
                        <OINP
                            text="START PROJECT"
                            background="white"
                            textColor="back"
                            image={VectorOpenInNew_b}
                            borderColor="white"
                        /> 
                        <div className="digencial__header-content_desc-tags_year">
                            <OINP
                                text="2023"
                                background=" rgba(0, 0, 0, 0.5)"
                                textColor="orange"
                                image={VectorCrown}
                                borderColor="white"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="digencial__header-forwardURL">
                <div className="digencial__header-forwardURL_imageURL">
                    <div>
                        <img src={VectorOpenInNew_w} alt="open in new window" />
                    </div>
                </div>
            </div>
            <div className="digencial__header-imageContainer">
                <div className="digencial__header-imageContainer_image">
                    <img src={centerImage} alt="Center Face" />
                </div>
            </div>
        </div>
    );
};

export default Header;
