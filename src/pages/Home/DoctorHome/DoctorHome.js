import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Doctor from '../../../shared/Doctors/Doctor/Doctor';

const DoctorHome = () => {
    const [doctorsHome, setDoctorsHome] = useState([]);

    useEffect(()=>{
        fetch('/doctors.json')
        .then(res=>res.json())
        .then(data => setDoctorsHome(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl font-bold mb-12">Doctors</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    doctorsHome.slice(0, 6).map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                }
            </div>
            <Link to="/experts">
                <button>View All Profiles</button>
            </Link>
        </div>
    );
};

export default DoctorHome;