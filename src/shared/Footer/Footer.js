import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-blue-900 py-4">
            <div className=" text-white w-10/12 md:w-11/12 mx-auto"> 
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* Footer services navigation */}
                    <div className="text-left">
                        <h2 className="text-lg font-bold mb-2">MEDICARE</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                    <div className="text-left">
                        <h3 className="text-lg font-bold mb-2 uppercase">Our Services</h3>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-circle-right mr-2"></i>
                            <p>Dental Surgery and Treatment</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                        <i className="fas fa-chevron-circle-right mr-2"></i>
                            <p>Eye Testing and Surgery</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-circle-right mr-2"></i>
                            <p>Birth cares</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-circle-right mr-2"></i>
                            <p>Blood banks</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-circle-right mr-2"></i>
                            <p>Pediatric Health Services</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-circle-right mr-2"></i>
                            <p>Experienced Doctor's Consultancy</p>
                        </div>
                    </div>
                    {/* footer navigation */}
                    <div className="text-left">
                        <h3 className="text-lg font-bold mb-2 uppercase">Navigation</h3>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-right mr-2"></i>
                            <p>About</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-right mr-2"></i>
                            <p>Contact</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-right mr-2"></i>
                            <p>Privacy &bsp; Policy</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-right mr-2"></i>
                            <p>Terms &bsp; Conditions</p>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <i className="fas fa-chevron-right mr-2"></i>
                            <p>Sitemap</p>
                        </div>
                       
                    </div>
                    {/* Get in touch */}
                    <div>
                        <h3 className="text-lg font-bold mb-2 uppercase">Get in touch</h3>
                        <div className="flex items-center justify-center">
                            <i className="fab fa-facebook-square text-4xl cursor-pointer"></i>
                            <i className="fab fa-twitter-square text-4xl mx-2.5 cursor-pointer"></i>
                            <i className="fab fa-google-plus-g text-4xl cursor-pointer"></i>
                            <i className="fab fa-linkedin text-4xl ml-2.5 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
                <div className="my-3">
                    <hr />
                </div>
                {/* Copyright */}
                <div >
                    <p>Made with &hearts; by <NavLink to="/home" className="author-credit">Samiul Islam </NavLink> </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;