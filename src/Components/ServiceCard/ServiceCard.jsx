import React from 'react'
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
  const {id, name, image, price, shortDescription} = service;

  return (
    <div className="max-w-full bg-white border border-gray-200 rounded-lg shadowdark:border-gray-700">
      <img className="rounded-t-lg" src={image} alt={name + ` image`} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
        <p className="mb-2 font-normal text-gray-600">{shortDescription}</p>
        <p className='mb-3 font-semibold text-xl'>${price} USD</p>
        <Link to={`/serviceDetails/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-400 dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-red-500">
          See Details
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard