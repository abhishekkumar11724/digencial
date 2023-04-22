import React from "react";
import { DescURL } from "../../components";
import VectorOpenInNew_w_sm from "../../assets/VectorOpenInNew_w_sm.png";
import logo_blue from "../../assets/logo_blue.png";
import logo_white from "../../assets/logo_white.png";
import "./footer.css";
const Footer = () => {
    const width = window.innerWidth;
    // console.log(width);
    return (
        <div className="digencial__footer section__padding" id="ContactUs">
            <div className="digencial__footer-content">
                <div className="digencial__footer-content_description">
                    <h3>
                        {width > 890 ? (
                            <img src={logo_blue} alt="logo" />
                        ) : (
                            <img src={logo_white} alt="logo" />
                        )}
                        Digencial
                    </h3>
                    <p>
                        Digencial is a digital agency that provides a range of
                        digital solutions to help businesses grow and succeed in
                        the digital world. We offer a wide range of services
                        including website design, web development, and social
                        media management.
                    </p>
                </div>
                <div className="digencial__footer-content_forwardURL">
                    {width > 890 ? (
                        <div>
                            <a href="mailto:info@digencial.com">
                                <DescURL
                                    text="E_MAIL"
                                    textSize={20}
                                    descText="info@digencial.com"
                                    descTextSize={24}
                                    image={VectorOpenInNew_w_sm}
                                    imageHeight={18}
                                    width={540}
                                />
                            </a>
                            <DescURL
                                text="INSTAGRAM"
                                textSize={20}
                                descText="dignecial"
                                descTextSize={24}
                                image={VectorOpenInNew_w_sm}
                                imageHeight={18}
                                width={540}
                            />
                            <DescURL
                                text="TWITTER"
                                textSize={20}
                                descText="dignecial"
                                descTextSize={24}
                                image={VectorOpenInNew_w_sm}
                                imageHeight={18}
                                width={540}
                            />
                            <DescURL
                                text="LINKDEIN"
                                textSize={20}
                                descText="dignecial"
                                descTextSize={24}
                                image={VectorOpenInNew_w_sm}
                                imageHeight={18}
                                width={540}
                            />
                        </div>
                    ) : (
                        <div>
                            <a href="mailto:info@digencial.com">
                                <DescURL
                                    text="E_MAIL"
                                    textSize={12}
                                    descText="info@digencial.com"
                                    descTextSize={12}
                                    image={VectorOpenInNew_w_sm}
                                    imageHeight={18}
                                    width={279}
                                />
                            </a>
                            <DescURL
                                text="INSTAGRAM"
                                textSize={12}
                                descText="dignecial"
                                descTextSize={12}
                                image={VectorOpenInNew_w_sm}
                                imageHeight={18}
                                width={279}
                            />
                            <DescURL
                                text="TWITTER"
                                textSize={12}
                                descText="dignecial"
                                descTextSize={12}
                                image={VectorOpenInNew_w_sm}
                                imageHeight={18}
                                width={279}
                            />
                            <DescURL
                                text="LINKDEIN"
                                textSize={12}
                                descText="dignecial"
                                descTextSize={12}
                                image={VectorOpenInNew_w_sm}
                                imageHeight={18}
                                width={279}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="digencial__footer-copyright">
                {width > 890 ? (
                    <>
                        <a href="https://docs.google.com/document/d/1st_lGrMPU5LYVmJ5zatUPnoH07LOAQFUinzZzJK0rcQ/edit?usp=sharing">
                            <DescURL
                                descText="Term of Agreement"
                                descTextSize={24}
                                image={VectorOpenInNew_w_sm}
                            />
                        </a>
                        <p>2023 | All rights reserved</p>
                        <a href="https://docs.google.com/document/d/1e4LW1ift5AdLOzCxD5dUZ8Kxy1xYu7UaVW5oMLCVsAo/edit?usp=sharing">
                            <DescURL
                                descText="Privacy & Policy"
                                descTextSize={24}
                                image={VectorOpenInNew_w_sm}
                            />
                        </a>
                    </>
                ) : (
                    <>
                        <div>
                            <DescURL
                                descText="Term of Agreement"
                                descTextSize={12}
                                image={VectorOpenInNew_w_sm}
                                width={167}
                            />
                            <DescURL
                                descText="Privacy & Policy"
                                descTextSize={12}
                                image={VectorOpenInNew_w_sm}
                                width={147}
                            />
                        </div>
                        <p>2023 | All rights reserved</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Footer;
