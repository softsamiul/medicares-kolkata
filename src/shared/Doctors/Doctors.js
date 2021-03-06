import React from 'react';
import useAuth from '../../hooks/useAuth';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const {doctors} = useAuth();
    return (
        <div className="mt-12 container">
            <h2 className="text-3xl md:text-5xl font-bold mb-12"> <i className="fas fa-user-md text-blue-900"></i> Our Experienced Doctors</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;