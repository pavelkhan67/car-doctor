import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='text-center space-y-5'>
            <h3 className='text-3xl font-bold text-warning'>Service</h3>
            <h1 className='text-5xl font-bold '>Our Service Area</h1>
            <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

            <div className='grid lg:grid-cols-3 gap-5'>
            {
                services.map(service => <SingleService key={service._id} service = {service}></SingleService>)
            }
            </div>
            <button className='btn btn-warning btn-outline'>More Services</button>
        </div>
    );
};

export default Services;