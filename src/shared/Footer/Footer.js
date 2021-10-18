import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="bg-blue-900 py-4 text-white">
                <p>Made with &hearts; by <NavLink to="/home" className="author-credit">Samiul Islam </NavLink> </p>
            </div>
        </div>
    );
};

export default Footer;