import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./DoctorsDetails.css";

const DoctorDetails = () => {
    const {id} = useParams();
    const {doctors} = useAuth();
    const selectedDoctor = doctors.find(selected => selected._id == id);

    const {name, dept, working, deg, avatar} = selectedDoctor;
    return (
        <div className="md:w-6/12 w-10/12 mx-auto doctor-details my-6" >
             <div className="text-center mb-2">
                    <img className="mx-auto rounded-circle" src={avatar} alt="" />
            </div>
            <div className="text-left">
                <h3 className="text-2xl font-medium">{name}</h3>
                <p>S{deg}</p>
                <div className="flex flex-col md:flex-row items-center ">
                    <div className="md:w-2/4 w-full mt-2 md:mt-0">
                        <p className="text-gray-700 font-medium">Specialization</p>
                        <h6 className="text-base text-blue-900">{dept}</h6>
                    </div>
                    <div className="md:w-2/4 w-full md:border-l md:border-gray-700 md:pl-4 mt-2 md:mt-0">
                        <p className="text-gray-700 font-medium">Working at </p>
                        <p className="text-base text-blue-900 ">{working}</p>
                    </div>
                    
                </div>
            </div>


            <NavLink to="/home">
                <button className="py-2 px-6 mt-6 bg-blue-900 text-white text-center rounded font-basic mb-6">Return home</button>
            </NavLink>
        </div>
    );
};

export default DoctorDetails;