import React from "react";
import "./services.css";
import { DescURL } from "../../components";
import VectorOpenInNew_w from "../../assets/VectorOpenInNew_w.png";
const Services = () => {
    const width = window.innerWidth;
    // console.log(width);
    return (
        <div className="digencial__services section__padding" id="Services">
            <div className="digencial__services-content">
                <div>
                    <h2>OUR SERVICES</h2>
                </div>
                <div>
                    <p>
                        From website design and development to search engine
                        optimization and social media marketing, we have the
                        expertise and experience to help our clients reach their
                        goals. Our team of dedicated professionals is committed
                        to delivering high-quality results and exceptional
                        customer service
                    </p>
                </div>
            </div>
            {width > 890 ? (
                <div href="https://forms.gle/YjekLVjBVg59NXg28" v>
                    <a>
                        <DescURL
                            text="UI/UX Design"
                            textSize="60px"
                            image={VectorOpenInNew_w}
                            imageWidth="75px"
                        />
                    </a>
                    {/* https://forms.gle/YjekLVjBVg59NXg28 */}
                    <a href="https://forms.gle/YjekLVjBVg59NXg28">
                        <DescURL
                            text="Graphic Design"
                            image={VectorOpenInNew_w}
                        />
                    </a>
                    <a href="https://forms.gle/YjekLVjBVg59NXg28">
                        <DescURL
                            text="Web Development"
                            image={VectorOpenInNew_w}
                        />
                    </a>
                    <a href="https://forms.gle/YjekLVjBVg59NXg28">
                        <DescURL
                            text="Social Media Managing"
                            image={VectorOpenInNew_w}
                        />
                    </a>
                </div>
            ) : (
                <div className="digencial__services-content_mobile">
                    <a href="https://forms.gle/YjekLVjBVg59NXg28">
                        <DescURL
                            text="UI/UX Design"
                            textSize={20}
                            image={VectorOpenInNew_w}
                            imageWidth={40}
                        />
                    </a>
                    <a href="https://forms.gle/YjekLVjBVg59NXg28">
                        <DescURL
                            text="Graphic Design"
                            textSize={20}
                            image={VectorOpenInNew_w}
                            imageWidth={40}
                        />
                    </a>
                    <a href="https://forms.gle/YjekLVjBVg59NXg28">
                        <DescURL
                            text="Web Development"
                            textSize={20}
                            image={VectorOpenInNew_w}
                            imageWidth={40}
                        />
                    </a>
                    <a href="https://forms.gle/YjekLVjBVg59NXg28">
                        <DescURL
                            text="Social Media Managing"
                            textSize={20}
                            image={VectorOpenInNew_w}
                            imageWidth={40}
                        />
                    </a>
                </div>
            )}
        </div>
    );
};

export default Services;
