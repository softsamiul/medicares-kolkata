import React from 'react';
import { useHistory } from 'react-router';

const Doctor = ({doctor}) => {
    const {_id, name, dept, working, deg, avatar} = doctor;
    const history = useHistory();
    const url = `/experts/${_id}`;
    const handleViewProfile = () => {
        history.push(url)
    }
    return (
        <div>
            <div className="border border-1-gray">
                <div className="text-center">
                    <img className="mx-auto" src={avatar} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <h6>{dept}</h6>
                    <p>{working}</p>
                    <button onClick={handleViewProfile}>View Profile</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Doctor;