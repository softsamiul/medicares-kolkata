import React from 'react';
import aboutImg from '../../assets/images/slide-1.jpg';
import Faq from '../../shared/Faq/Faq';
import './About.css';

const About = () => {
    return (
        <div className="py-8 w-11/12 mx-auto">
            <div className="flex items-center">
                {/* About Medicares start */}
                <div className="w-2/4 text-left">
                    <h2 className="text-2xl font-medium">About MediCares</h2>
                    <p className="text-gray-700">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    {/* FAQ Added*/}
                    <div className="mt-6">
                        <Faq></Faq>
                    </div>
                </div>
                <div className="w-2/4">
                    <div className="w-3/5 mx-auto">
                        <img className="" src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;