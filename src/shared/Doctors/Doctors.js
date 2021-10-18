import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('/doctors.json')
        .then(res=>res.json())
        .then(data => setDoctors(data))
    },[])
    
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