import React from 'react';

const CallToAction = () => {
    return (
        <div className="text-white">
            <div className="grid grid-cols-3 ">
                <div className="emergency-case bg-green-900 py-8">
                    <div className="text-4xl font-bold">
                        <i className="fas fa-tint"></i>
                        <h2 >Emergency Case</h2>
                    </div>
                </div>
                <div className="opening-hours py-8 bg-blue-900">
                    <div className="text-4xl font-bold">
                        <i className="fas fa-clock"></i>
                        <h2>Opening Hours</h2>
                    </div>
                    <p>24 x 7 Hours Available</p>
                </div>
                <div className="cancer-care bg-green-900 py-8">
                    <div className="text-4xl font-bold">
                        <i className="fas fa-smoking-ban"></i>
                        <h2>Cancer Care</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CallToAction;