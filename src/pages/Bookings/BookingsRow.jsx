import React from 'react';

const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, customerName, email, date, service, img, price, phone, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-xl w-28 h-28">
                            {img && <img src={img} />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">{date}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{email}</td>
            <td>${price}</td>
            <th>
                {
                    status === 'confirm' ? <span className='text-warning'>Confirmed</span> :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-sm normal-case">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingsRow;