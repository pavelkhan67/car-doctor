import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SingleService = ({ service }) => {
    const { _id, service_id, title, img, price, description, facility } = service;

    return (
        <div className="card card-compact w-full bg-base-100 border-2 border-base-200 px-5 ">
            <figure className='pt-5'><img className='rounded-lg h-48 w-full' src={img} alt="Service img" /></figure>
            <div className="text-start py-5">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="card-actions justify-between mt-5">
                    <p className='text-warning font-bold'>Price : ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                    <button className="btn-warning btn btn-outline">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;