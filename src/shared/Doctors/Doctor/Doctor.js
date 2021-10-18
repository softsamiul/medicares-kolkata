import React from 'react';

const Doctor = ({doctor}) => {
    const {_id, name, dept, working, deg, avatar} = doctor;
    return (
        <div className="border border-1-gray">
            <div className="text-center">
                <img className="mx-auto" src={avatar} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <h6>{dept}</h6>
                <p>{working}</p>
                <button>View Profile</button>
            </div>
        </div>
    );
};

export default Doctor;