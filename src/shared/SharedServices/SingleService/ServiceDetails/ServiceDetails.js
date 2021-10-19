import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {id} = useParams();
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data => {setServices(data.find(select => select.serviceID == id))})
    },[])
    // const selectedService = 
    console.log(services);
    
    
    return (
        <div className="flex w-11/12 mx-auto items-center">
            <div className="w-2/5">
                <img src={services.servceImg} alt="" />
            </div>
            <div className="w-3/5">
                <h3 className="text-3xl font-bold mb-2">{services.serviceName}</h3>
                <p className="text-left">{services.serviceDesc}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;