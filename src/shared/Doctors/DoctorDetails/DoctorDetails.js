import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DoctorDetails = () => {
    const {id} = useParams();
    const {doctors} = useAuth();
    const selectedDoctor = doctors.find(selected => selected._id == id);

    const {_id, name, dept, working, deg, avatar} = selectedDoctor;
    console.log(doctors);
    console.log(selectedDoctor);
    
    
    return (
        <div className="w-2/4 mx-auto p-16 m-10">
            <div className="doctor-profile">
                <div>
                    <img className="rounded-circle mx-auto" src={avatar} alt="" />
                </div>
                <h2 className="text-xl font-medium">{name}</h2>
                <p className="font-basic">{deg}</p>
                <p className="font-basec">{working}({dept})</p>
            </div>
            <NavLink to="/home">
                <button className="py-2 px-6 mt-6 bg-blue-900 text-white text-center rounded font-basic">Return home</button>
            </NavLink>
        </div>
    );
};

export default DoctorDetails;