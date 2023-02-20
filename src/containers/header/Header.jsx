import React from "react";
import centerImage from "../../assets/centerImage.png";
import VectorOpenInNew_b from "../../assets/VectorOpenInNew_b.png";
import VectorOpenInNew_w from "../../assets/VectorOpenInNew_w.png";
import VectorCrown from "../../assets/VectorCrown.png";
import './header.css';

const Tag = (props) => {
  <>
    <div className="tag">
      <button>
        <p>{props.text}</p>
        <img src={props.image} alt="tag img" />
      </button>
    </div>
  </>
}

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
                    <button>
                        <p>START PROJECT</p>
                        <img src={VectorOpenInNew_b} alt="Open in new Window" />
                    </button>
                    
                    <div className="digencial__header-content_desc-tags_year">
                        <p>2023</p>
                        <img src={VectorCrown} alt="Crown" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="digencial__header-imageContainer">
                <div className="digencial__header-imageContainer_image">
                    <img src={centerImage} alt="Center Face" />
                </div>
                <div className="digencial__header-imageContainer_imageURL">
                    <button>
                        <a href="">
                            <img
                                src={VectorOpenInNew_w}
                                alt="Open in new Window"
                            />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
