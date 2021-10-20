
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div  className="banner-wrapper w-11/12 mx-auto" style={{margin:"50px 0"}}>
            <div className="flex flex-col md:flex-row  items-center">
                {/* banner left */}
                <div className="md:w-2/4 w-11/12">
                    <div className="w-3/5 mx-auto">
                        <h2 className="md:text-5xl text-3xl text-left mb-4 font-extrabold banner-tag ">MediCares <span className="font-normal">Kolkata</span></h2>
                        <div className="flex items-center text-left">
                            <i className="fas fa-arrow-alt-circle-right mr-2 text-blue-900"></i>
                            <p className="text-lg text-gray-700">The heart of your healthcare</p>
                        </div>
                        <div className="flex items-center text-left">
                            <i className="fas fa-arrow-alt-circle-right mr-2 text-blue-900"></i>
                            <p className="text-lg text-gray-700">Advanced Medicine. Personal Care.</p>
                        </div>
                        <div className="flex items-center text-left">
                            <i className="fas fa-arrow-alt-circle-right mr-2 text-blue-900"></i>
                            <p className="text-lg text-gray-700">The care you need. The compassion you deserve.</p>
                        </div>
                        
                    </div>
                    <button className="py-2 px-6 bg-blue-900 rounded text-white text-left mt-3 font-bold text-base">Explore Now</button>
                </div>
                {/* Banner right section */}
                <div className="md:w-2/4 w-11/12 mt-4 mt-0">
                    <div className="md:w-3/5 w-full">
                    <iframe className="iframe-video" width="560" height="315"  src="https://www.youtube.com/embed/DublqkOSBBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;