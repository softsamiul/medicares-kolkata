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
        <div className="single-service p-6 text-left">
            <div className="w-3/5 mx-auto h-44">
                <img className="w-full max-h-40 rounded-lg img-hover" src={serviceImg} alt="" />
            </div>
            <h3 className="text-2xl font-medium">{serviceName}</h3>
            <p className="text-base py-2 text-gray-700">{serviceDesc.slice(0,150)}...</p>
          
            <button className="py-2 px-6 bg-blue-900 rounded-lg text-white btn-hover" onClick={handleViewDetails}>View Details</button>
        </div>
    );
};

export default SingleService;