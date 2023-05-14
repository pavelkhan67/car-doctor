import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Checkout = () => {
    const service = useLoaderData();
    const {_id, title, service_id, price , img} = service;
    const {user} = useContext(AuthContext);

    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const booking = {
            customerName: name,
            email,
            date,
            service: title,
            service_id: _id,
            img,
            price: price,
            phone,
            message
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Service Book Successful')
            }
        })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-center py-5'>Book Service: <span className='text-warning text-4xl'>{title}</span></h2>
            <div className="card-body">
                <form onSubmit={handleCheckOut}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="form-control">
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="date" name='date' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number" name='phone' placeholder="Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                    <textarea placeholder="message" name='message' className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-warning text-white' type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;