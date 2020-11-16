import React from 'react';
import './Footer.css'
import MapIcon from '../../assets/icons/map-icon.png'
import FbSquareIcon from '../../assets/icons/fb-square-icon.png'
import InstagramIcon from '../../assets/icons/instagram-icon.png'
import LinkedInIcon from '../../assets/icons/linkedin-icon.png'
import YoutubeIcon from '../../assets/icons/youtube-icon.png'


const Footer = () => {
    return (
        <footer className="footer-area clear-both green-bg text-white">
            <div className="container pt-5 px-5">
                <div className="row py-5">
                    <div className="col-md-4 col-12 mb-3 d-flex mt-3">
                        <span><p>H#340 (4th Floor), Road #24, <br />
                    New DOHS, Mohakhali, Dhaka, Bangladesh <br />
                    Phone: 018XXXXXXXX <br />
                    E-mail: info@company.com</p></span>
                    </div>
                    <div className="col-md-2 col-12 mb-3">
                        <h6 className="font-weight-bold">Company</h6>
                        <ul className="list-unstyled mt-4">
                            <li><a href="/#">About</a></li>
                            <li><a href="/#">Site Map</a></li>
                            <li><a href="/#">Support Center</a></li>
                            <li><a href="/#">Terms Conditions</a></li>
                            <li><a href="/#">Submit Listing</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-12 mb-3">
                        <h6 className="font-weight-bold">Quick Links</h6>
                        <ul className="list-unstyled mt-4">
                            <li><a href="/#">Quick Links</a></li>
                            <li><a href="/#">Rentals</a></li>
                            <li><a href="/#">Sales</a></li>
                            <li><a href="/#">Contact</a></li>
                            <li><a href="/#">Terms Conditions</a></li>
                            <li><a href="/#">Our blog</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-12 mb-3">
                        <h6 className="font-weight-bold mb-4">About Us</h6>
                        <p>We are the top real estate <br />
                agency in Sydney, with agents <br />
                available to answer any <br />
                question 24/7.</p>
                        <ul className="social-media list-inline mt-4">
                            <li className="list-inline-item">
                                <a href="//facebook.com">
                                    <img src={FbSquareIcon} alt="" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <img src={InstagramIcon} alt="" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <img src={LinkedInIcon} alt="" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <img src={YoutubeIcon} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>




                </div>
            </div>
        </footer>
    );
};

export default Footer;