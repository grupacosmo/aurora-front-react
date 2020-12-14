import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

function Footer() {
	return (
    <div id="footerSection">
		<div className="footer">
            <div className="inner-footer">
                <div className="footer-items">
                    <h1 style={{color: "#BFBFBF", fontWeight: "lighter"}}>Aurora &amp; PK</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

            <div className="footer-items">
                <h2 style={{color: "#FAFAFA", fontWeight: "lighter"}}>Quick Links</h2>
                    <div className="border" />
                        <ul>
                            <a href>
                                <li>Home</li>
                            </a>
                            <a href>
                              <li>About Us</li>
                            </a>
                            <a href>
                              <li>Services</li>
                            </a>
                            <a href>
                              <li>Portfolio</li>
                            </a>
                            <a href>
                              <li>Contact Us</li>
                            </a>
                        </ul>
                    </div>

                    <div className="footer-items">
                        <h2 style={{color: "#FAFAFA", fontWeight: "lighter"}}>Sekcje</h2>
                            <div className="border" />
                            <ul>
                                <a href>
                                    <li>Sekcja 1</li>
                                </a>

                                <a href>
                                    <li>Sekcja 2</li>
                                </a>

                                <a href>
                                    <li>Sekcja 3</li>
                                </a>

                                <a href>
                                    <li>Sekcja 4</li>
                                </a>

                                <a href>
                                    <li>Sekcja 5</li>
                                </a>
                            </ul>
                    </div>

                    <div className="footer-items">
                        <h2 style={{color: "#FAFAFA", fontWeight: "lighter"}}>Kontakt</h2>
                        <div className="border" />
                        <ul>
                            <li>
                                <a href="https://www.google.com/maps/place/Politechnika+Krakowska+im.+Tadeusza+Ko%C5%9Bciuszki/@50.0720478,19.9406074,17z/data=!3m1!4b1!4m5!3m4!1s0x47165b04a4a0d5bf:0x41a815e1860a19eb!8m2!3d50.0720444!4d19.9427961">
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight: "0.3rem"}} /> 
                                Warszawska 24, Kraków
                                </a>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faPhone} style={{marginRight: "0.3rem"}} /> 12 628 20 00
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faEnvelope} style={{marginRight: "0.3rem"}} /> cosmopk@gmail.com
                            </li>
                        </ul>

                        <div className="social-media">
                            <a href>
                                <FontAwesomeIcon icon={faFacebookF} style={{fontSize: "1.3rem", display: "inline-block", marginLeft: "0.6rem"}} /> 
                            </a>

                            <a href>
                                <FontAwesomeIcon icon={faTwitter} style={{fontSize: "1.3rem", display: "inline-block", marginLeft: "0.6rem"}} /> 
                            </a>

                            <a href>
                                <FontAwesomeIcon icon={faInstagram} style={{fontSize: "1.3rem", display: "inline-block", marginLeft: "0.6rem"}} />
                            </a>

                            <a href>
                                <FontAwesomeIcon icon={faGithub} style={{fontSize: "1.3rem", display: "inline-block", marginLeft: "0.6rem"}} />
                            </a>
                        </div>
                    </div>
            </div>
            <div className="footer-bottom" style={{textAlign: "center", fontWeight: "lighter", fontSize: "16px"}}> Politechnika Krakowska 2020 ©.</div>
        </div>
    </div>
	)
}

export default Footer