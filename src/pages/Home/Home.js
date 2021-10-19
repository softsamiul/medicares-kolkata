import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Doctor from '../../shared/Doctors/Doctor/Doctor';
import Services from '../Services/Services';
import CallToAction from './CallToAction/CallToAction';
import Slider from './Slider/Slider';

const Home = () => {
    const {doctors} = useAuth();
    return (
        <div >
            {/* Slider added */}
            <Slider></Slider>
            {/* home call to action section added */}
            <CallToAction></CallToAction>
            <div  className="w-11/12 mx-auto">
                {/* home Services section start */}
                <Services></Services>
                {/* Doctors section start */}
                <div className="my-8">
                    <h2 className="text-5xl font-bold mb-12"> <i className="fas fa-user-md text-blue-900"></i> Our Experienced Doctors</h2>
                    <div></div>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            doctors.slice(0, 3).map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                        }
                    </div>
                    <Link to="/experts">
                        <button className="bg-blue-900 py-2 px-6 rounded-lg mt-8 text-white">View All Profiles</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;