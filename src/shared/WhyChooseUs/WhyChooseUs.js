import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="w-11/12 mx-auto ">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 mb-12">
                <div className="flex flex-col md:flex-row items-center">
                    <i class="fas fa-caret-right mr-4 text-2xl text-blue-900"></i>
                    <p className="text-xl font-medium">Qualified Doctors</p>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <i class="fas fa-caret-right mr-4 text-2xl text-blue-900"></i>
                    <p className="text-xl font-medium">Transparent Services</p>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <i class="fas fa-caret-right mr-4 text-2xl text-blue-900"></i>
                    <p className="text-xl font-medium">Emergency Depertments</p>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <i class="fas fa-caret-right mr-4 text-2xl text-blue-900"></i>
                    <p className="text-xl font-medium">24 Hours Service</p>
                </div>
                
            </div>
        </div>
    );
};

export default WhyChooseUs;