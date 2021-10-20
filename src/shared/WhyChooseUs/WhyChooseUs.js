import React from 'react';
import emergency from '../../assets/images/emergency.jpg';
import qualified from '../../assets/images/qualified.png';
import time from '../../assets/images/time.jpg';
import transparent from '../../assets/images/transparent.jpg';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className="w-11/12 mx-auto border-t-2 pt-4 mt-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 mb-12 gap-4 text-center">
                <div className="single-choice">
                    <div>
                        <img style={{height:"150px"}} className="mx-auto rounded-lg img-hover" src={qualified} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-2">
                        <i className="fas fa-caret-right mr-4 text-2xl text-blue-900"></i>
                        <p className="text-xl font-medium">Qualified Doctors</p>
                    </div>
                </div>
                <div className="single-choice">
                    <div>
                        <img style={{height:"150px"}} className="mx-auto rounded-lg img-hover" src={transparent} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-2">
                        <i className="fas fa-caret-right mr-4 text-2xl text-blue-900"></i>
                        <p className="text-xl font-medium">Transparent Services</p>
                    </div>
                </div>
                <div className="single-choice">
                    <div>
                        <img style={{height:"150px"}} className="mx-auto rounded-lg img-hover" src={emergency} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-2">
                        <i className="fas fa-caret-right mr-4 text-2xl text-blue-900"></i>
                        <p className="text-xl font-medium">Emergency Depertments</p>
                    </div>
                </div>
                <div className="single-choice">
                    <div>
                        <img style={{height:"150px"}} className="mx-auto rounded-lg img-hover" src={time} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-2">
                        <i className="fas fa-caret-right mr-4 text-2xl text-blue-900"></i>
                        <p className="text-xl font-medium">24 Hours Service</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default WhyChooseUs;