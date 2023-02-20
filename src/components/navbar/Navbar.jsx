import React, { useState, useEffect } from "react";
import Unionlogo from "../../assets/Unionlogo.png";
import Menu from "../../assets/Menu_3line.png";
import "./navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return (
        <div className="digencial__navbar">
            <div className="digencial__navbar-links">
                <div className="digencial__navbar-links_container">
                    <p>
                        <a href="#AboutUs">About Us</a>
                    </p>
                    <p>
                        <a href="#Projects">Project</a>
                    </p>
                </div>
                <div className="digencial__navbar-links_logo">
                    <img src={Unionlogo} alt="Unionlogo" />
                    <p>Digencial</p>
                </div> 
                <div className="digencial__navbar-links_container">
                    <p>
                        <a href="#Services">Services</a>
                    </p>
                    <p>
                        <a href="#ContactUs">Contact Us</a>
                    </p>
                </div>
            </div>

            <div className="digencial__navbar-menu">
                <img
                    src={Menu}
                    alt="menu"
                    onClick={() => setToggleMenu(true)}
                />
                {toggleMenu && (
                    <div
                        className="digencial__navbar-small"
                        onClick={() => setToggleMenu(false)}
                    >
                        <ul>
                            <li>
                                <a href="#AboutUs">About Us</a>
                            </li>
                            <li>
                                <a href="#Projects">Projects</a>
                            </li>
                            <li>
                                <a href="#Services">Services</a>
                            </li>
                            <li>
                                <a href="#ContactUs">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
