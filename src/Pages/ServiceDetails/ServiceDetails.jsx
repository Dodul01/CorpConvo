import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ServiceDetails = () => {
  const page = useParams();
  const data = useLoaderData();
  const pageData = data.find(service => service.id == page.id);
  const { name, image, price, longDescription } = pageData;

  return (
    <div className='flex justify-between lg:flex-row flex-col m-2'>
      <div className='flex-grow'>
        <img className='h-[70vh] w-auto object-cover rounded-lg mx-auto' src={image} alt={name + ' image'} />
      </div>
      <div className='px-4'>
        <h1 className='text-2xl mb-2 font-bold'>{name}</h1>
        <h3 className='text-xl mb-4 font-semibold'>Price: ${price} USD</h3>
        <p className='text-gray-700 text-lg max-w-xl mb-4'>{longDescription}</p>
        <button className='btn text-white bg-red-500 hover:bg-red-400'>Book Now</button>
      </div>
    </div>
  )
}

export default ServiceDetails
