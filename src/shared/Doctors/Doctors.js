import React from 'react';
import useAuth from '../../hooks/useAuth';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const {doctors} = useAuth();
    return (
        <div className="mt-12 container">
            <h2 className=" text-5xl font-extrabold">Doctors</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;