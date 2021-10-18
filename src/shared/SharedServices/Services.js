import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';

const SharedServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="pb-12">
            <h2 className="text-5xl font-bold mb-6">Services</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    services.map(service => <SingleService key={service.serviceID} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default SharedServices;