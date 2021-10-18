import React from 'react';

const SingleService = ({service}) => {
    const {serviceID, serviceName, serviceDesc, serviceImg} = service;
    return (
        <div className="border-1-gray border p-6">
            <div>
                <img src={serviceImg} alt="" />
            </div>
            <h3>{serviceName}</h3>
            <p>{serviceDesc.slice(0,150)}...</p>
            <button>View Details</button>
        </div>
    );
};

export default SingleService;