import React from 'react';
import Services from '../Services/Services';
import DoctorHome from './DoctorHome/DoctorHome';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <div  className="w-11/12 mx-auto">
                <Services></Services>
                <DoctorHome></DoctorHome>
            </div>
        </div>
    );
};

export default Home;