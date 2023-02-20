import React from "react";
import "./happyClients.css";
import HappyClient_heart from "../../assets/HappyClient__heart.png";

const HappyClients = () => {
    return (
        <div className="digencial__happyClients section__padding">
            <div className="digencial__happyClients-content">
                <h2>HAPPY CLIENTS</h2>
                <p>
                    We are proud to have a long list of happy clients who have
                    experienced the positive impact of our digital solutions.
                </p>
            </div>
            <div className="digencial__happyClients-clients">
                <img src={HappyClient_heart} alt="heart" />
                <div className="digencial__happyClients-clients_count">
                    <h3>15+</h3>
                    <p>Clients</p>
                </div>
            </div>
        </div>
    );
};

export default HappyClients;
