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
            <Slider></Slider>
            <CallToAction></CallToAction>
            <div  className="w-11/12 mx-auto">
                
                <Services></Services>
                <div>
                    <h2 className="text-5xl font-bold mb-12"> <i className="fas fa-user-md text-blue-900"></i> Doctors</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {
                            doctors.slice(0, 4).map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                        }
                    </div>
                    <Link to="/experts">
                        <button>View All Profiles</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;