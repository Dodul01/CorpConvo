import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppProvider'

const Nav = () => {
  const { user, logOut } = useContext(AppContext);
  const navLink = <>
    <NavLink className='px-1 mx-2' to='/'>Home</NavLink>
    <NavLink className='px-1 mx-2' to='/gallery'>Gallery</NavLink>
    <NavLink className='px-1 mx-2' to='/bookings'>Bookings</NavLink>
    <NavLink className='px-1 mx-2' to='/about'>About</NavLink>
  </>

  const handleLogOut = () => {
    logOut();
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl text-red-500 ">CorpConvo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {user &&
          <div className='hidden lg:flex items-center justify-center mr-4'>
            <img className='h-[40px] w-[40px] btn-circle object-cover mr-1' src={user?.photoURL} alt="" />
            <div>
              <h4 className='font-semibold'>{user?.displayName}</h4>
              <h4 className='font-semibold'>{user?.email}</h4>
            </div>
          </div>
        }
        {
          user ?
            <button onClick={handleLogOut} className="btn bg-red-500 text-white hover:bg-red-400">Log Out</button> :

            <Link to='/login' className="btn bg-red-500 text-white hover:bg-red-400">LogIn</Link>
        }
      </div>
    </div>
  )
}

export default Nav
