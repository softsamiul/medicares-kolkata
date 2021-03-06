import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const ServiceDetails = () => {
    const {id} = useParams();
    const {services} = useAuth();
    
    const selectedService = services.find(select => select.serviceID == id);

    const {serviceImg, serviceName, serviceDesc} = selectedService;
    
    return (
        <div className="flex flex-col md:flex-row w-8/12 mx-auto items-center my-12">
            <div className="w-full md:w-2/5">
                <img src={serviceImg} alt="" />
            </div>
            <div className="w-full md:w-3/5 text-left pl-4">
                <h3 className="text-3xl font-bold mb-2">{serviceName}</h3>
                <p className="text-left">{serviceDesc}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;