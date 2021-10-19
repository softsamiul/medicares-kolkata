import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import SingleService from './SingleService/SingleService';

const SharedServices = () => {
    const {services} = useFirebase();
    return (
        <div className="py-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6"><i className="fab fa-servicestack text-blue-900"></i> We  Are Offering</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 rounded-lg gap-4">
                {
                    services.map(service => <SingleService key={service.serviceID} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default SharedServices;