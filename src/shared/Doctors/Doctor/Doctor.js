import React from 'react';
import { useHistory } from 'react-router';
import './Doctor.css';
const Doctor = ({doctor}) => {
    const {_id, name, dept, working, avatar} = doctor;
    const history = useHistory();
    const url = `/experts/${_id}`;
    const handleViewProfile = () => {
        history.push(url)
    }
    return (
        <div>
            {/* Single docttor start */}
            <div className="single-doctor px-10 py-4">
                <div className="text-center mb-2 single-doc-img">
                    <img className="mx-auto rounded" src={avatar} alt="" />
                </div>
                <div className="text-left">
                    <h3 className="text-lg">{name}</h3>
                    <div className="flex items-center justify-between">
                        <h6 className="text-base text-blue-900 w-2/4">{dept}</h6>
                        <p className="text-base text-blue-900 border-l border-gray-700 w-2/4 text-right">{working}</p>
                    </div>
                    <button className="text-base bg-blue-900 px-6 py-1 rounded mt-2 text-white mx-auto text-center inline-block" onClick={handleViewProfile}>View Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;