import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Doctor from '../../shared/Doctors/Doctor/Doctor';
import WhyChooseUs from '../../shared/WhyChooseUs/WhyChooseUs';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import CallToAction from './CallToAction/CallToAction';

const Home = () => {
    const {doctors} = useAuth();
    return (
        <div >
            {/* Slider added */}
            <Banner/>
            {/* home call to action section added */}
            <CallToAction></CallToAction>
            <div  className="w-11/12 mx-auto">
                
                {/* Doctors section start */}
                <div className="my-8 border-b-2 pb-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12"> <i className="fas fa-user-md text-blue-900"></i> Our Experienced Doctors</h2>
                    <div></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            doctors.slice(0, 3).map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                        }
                    </div>
                    <Link to="/experts">
                        <button className="bg-blue-900 py-2 px-6 rounded-lg mt-8 text-white btn-hover">View All Profiles</button>
                    </Link>
                </div>
                {/* home Services section start */}
                <Services></Services>
                <Link to="/services">
                        <button className="bg-blue-900 py-2 px-6 rounded-lg mb-4 text-white btn-hover">View All Services</button>
                </Link>
                {/* Why choose us */}
                <WhyChooseUs></WhyChooseUs>
            </div>
        </div>
    );
};

export default Home;