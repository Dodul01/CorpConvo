import React from 'react'

const WhyUs = () => {
  return (
    <div className=' my-10'>
      <h1 className='text-3xl font-bold mx-5 mt-15 mb-5'>Why Chose Us?</h1>
      <div className='flex gap-4 lg:flex-row flex-col'>
        <div className='border-2 p-4 rounded-lg m-4'>
          <img className='h-36 mx-auto' src="https://i.ibb.co/J76N6z4/rating.png" alt="" />
          <h1 className='text-xl font-semibold text-center my-2'>Expertise and Experience</h1>
          <p className='text-gray-500 text-center'>Our seasoned team brings years of event management experience, ensuring your corporate events run smoothly from start to finish.</p>
        </div>
        <div className='border-2 p-4 rounded-lg m-4'>
          <img className='h-36 mx-auto' src="https://i.ibb.co/CKgc8xf/solution.png" alt="" />
          <h1 className='text-xl font-semibold my-2 text-center'>Tailored Solutions</h1>
          <p className='text-gray-500 text-center'>We craft customized event solutions that align perfectly with your unique goals and brand, delivering an event that's distinctly yours.</p>
        </div>
        <div className='border-2 p-4 rounded-lg m-4'>
          <img className='h-36 mx-auto' src="https://i.ibb.co/yFF8Rhw/service.png" alt="" />
          <h1 className='text-xl font-semibold my-2 text-center'>Commitment to Excellence</h1>
          <p className='text-gray-500 text-center'>We're dedicated to excellence in every detail, backed by satisfied clients and industry recognition for our top-notch event services.</p>
        </div>

      </div>
    </div>
  )
}

export default WhyUs
