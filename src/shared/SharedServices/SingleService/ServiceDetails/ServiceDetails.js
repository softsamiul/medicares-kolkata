import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const ServiceDetails = () => {
    const {id} = useParams();
    const {services} = useAuth();
    
    const selectedService = services.find(select => select.serviceID == id);

    const {serviceImg, serviceName, serviceDesc} = selectedService;

    console.log(selectedService);
    
    
    return (
        <div className="flex w-11/12 mx-auto items-center my-12">
            <div className="w-2/5">
                <img src={serviceImg} alt="" />
            </div>
            <div className="w-3/5">
                <h3 className="text-3xl font-bold mb-2">{serviceName}</h3>
                <p className="text-left">{serviceDesc}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;