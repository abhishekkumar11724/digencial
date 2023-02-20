import React from "react";
import "./products.css";
import { Card, OINP } from "../../components";
import VectorOpenInNew_b from "../../assets/VectorOpenInNew_b.png";

const Products = () => {
    const oinp = (
        <OINP
            text="Contact now!!"
            background="white"
            textColor="back"
            image={VectorOpenInNew_b}
            borderColor="white"
        />
    );
    return (
        <div className="digencial__products section__padding">
            <div className="digencial__products-heading">
                <h2>SELECTED WORKS</h2>
                <p>
                    Some of our standout projects are among the many successful
                    projects we have delivered for our clients. We are proud of
                    the positive impact our digital solutions have had on the
                    growth and success of businesses across a wide range of
                    industries.
                </p>
            </div>
            <div className="digencial__products-content">
                <div className="digencial__products-content_grid-1">
                    <Card
                        title="KONCLAVES"
                        boldText="Konclaves"
                        text=" Global is a platform where wiser meets wisest through meaningful deliberation in terms of ideas, experiences & future roadmaps"
                        year="2022"
                        background="#FFC300"
                    />
                </div>
                <div className="digencial__products-content_grid-2">
                    <Card
                        title="YOUR PROJECT"
                        OINP={oinp}
                        background="#FF00A8"
                    />
                </div>
                <div className="digencial__products-content_grid-3">
                    <Card
                        title="KONTEMPORE"
                        boldText="Kontempore"
                        text=" , drawn from the words contemporary and relevant is a movement. Organizations are going to go through huge talent transformation in next one decade because of automation, digitization, artificial intelligence etc. Type of talent industry required and opportunity industry provided in the past will go through huge transition with more part-time, contractual and consulting jobs."
                        year="2022"
                        background="#0E84FF"
                    />
                </div>
            </div>
            <div className="digencial__products-moreContent">
              <p>and many more...</p>
            </div>
        </div>
    );
};

export default Products;
