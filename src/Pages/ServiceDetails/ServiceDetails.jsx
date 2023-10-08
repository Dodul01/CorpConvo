import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppProvider';

const ServiceDetails = () => {
  const {user} =useContext(AppContext);
  const page = useParams();
  const data = useLoaderData();
  const pageData = data.find(service => service.id == page.id);
  const { id, name, image, price, longDescription } = pageData;
  const bookingsArr = [];

  const handleBookings = () => {
    const getLocalData = JSON.parse(localStorage.getItem(`${user?.displayName} eventBookings`))

    if (!getLocalData) {
      bookingsArr.push(pageData);
      localStorage.setItem(`${user?.displayName} eventBookings`, JSON.stringify(bookingsArr));

      return toast.success(`You booked an event for ${name}.`)
    } else {
      const findDuplicate = getLocalData.find(item => item.id === id);

      if (findDuplicate) {
        return toast.error(`You already booked an event for ${name}.`)
      } else {
        bookingsArr.push(...getLocalData, pageData);
        localStorage.setItem(`${user?.displayName} eventBookings`, JSON.stringify(bookingsArr));

        return toast.success(`You booked an event for ${name}.`)
      }
    }

  }

  useState(() => {

  }, [bookingsArr])


  return (
    <div className='flex justify-between lg:flex-row flex-col m-2'>
      <div className='flex-grow'>
        <img className='h-[70vh] w-auto object-cover rounded-lg mx-auto' src={image} alt={name + ' image'} />
      </div>
      <div className='px-4'>
        <h1 className='text-2xl mb-2 font-bold'>{name}</h1>
        <h3 className='text-xl mb-4 font-semibold'>Price: ${price} USD</h3>
        <p className='text-gray-700 text-lg max-w-xl mb-4'>{longDescription}</p>
        <button onClick={handleBookings} className='btn text-white bg-red-500 hover:bg-red-400'>Book Now</button>
      </div>
    </div>
  )
}

export default ServiceDetails
