import React from 'react';
import { useHistory } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({service}) => {
    const {serviceID, serviceName, serviceDesc, serviceImg} = service;
    const history = useHistory();
    const handleViewDetails = () => {
        const url = `/services/${serviceID}`;
        history.push(url)
    }
    return (
        <div className="single-service p-6">
            <div>
                <img src={serviceImg} alt="" />
            </div>
            <h3 className="text-3xl font-medium">{serviceName}</h3>
            <p className="text-base py-2">{serviceDesc.slice(0,150)}...</p>
          
            <button className="py-2 px-6 bg-blue-900 rounded-lg text-white" onClick={handleViewDetails}>View Details</button>
        </div>
    );
};

export default SingleService;