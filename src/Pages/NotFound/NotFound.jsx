import React from 'react'
import notFoundSvg from  '../../assets/not found.svg';
import Nav from '../../Components/Nav/Nav';

const NotFound = () => {
  return (
    <div>
      <Nav></Nav>
      <img className='h-[40vw] w-screen mx-auto' src={notFoundSvg} alt="" />
    </div>
  )
}

export default NotFound
