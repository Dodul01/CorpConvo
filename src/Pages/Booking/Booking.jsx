import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext/AppProvider';

const Booking = () => {
  const {user} = useContext(AppContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(`${user.displayName} eventBookings`));
    setBookings(localData);
  }, [])
  return (
    <div className='min-h-screen mx-2'>
      <h1 className='text-2xl font-bold'>Booking</h1>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5'>
        {bookings?.length > 0 ?
          bookings.map((booking) => {
            return <div key={booking.id} className='flex border rounded-lg p-3'>
              <div className='mr-2'>
                <img className='h-[100px] w-[100px] object-cover rounded-lg' src={booking.image} alt="" />
              </div>
              <div>
                <h1 className='text-lg font-semibold'>{booking.name}</h1>
                <p className='font-semibold'>Price: {booking.price}$</p>
                <p className='text-gray-600'>{booking.shortDescription}</p>
              </div>
            </div>
          })
          : <h2 className='text-lg font-semibold'>{user.displayName} haven't booked any events yet.</h2>
        }
      </div>
    </div>
  )
}

export default Booking