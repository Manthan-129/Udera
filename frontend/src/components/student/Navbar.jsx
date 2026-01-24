import React from 'react'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext.jsx'

import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
const Navbar = () => {

  const isCourseListPage= location.pathname.includes('/course-list');

  const {openSignIn}= useClerk();
  const{ user }= useUser();

  const { navigate, isEducator }= useContext(AppContext);

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-300 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <Link to='/'><img src={assets.logo} alt="Logo Student" className='w-28 lg:w-32 cursor-pointer' /></Link>
      
      {/* For Desktop View */}
      <div className='hidden md:flex items-center gap-10 text-gray-600 font-medium'>
        <div className='flex items-center gap-10'>
          {user && 
          <> 
          {<button className='hover:text-blue-600 transition-colors' onClick={()=> navigate('/educator')} >{isEducator ? "Educator Dashboard" : "Become Educator"}</button>}
          | <Link to='/my-enrollments' className='hover:text-blue-600 transition-colors'>My Enrollments</Link>
          </>
          }
          
        </div>
        {user ? <UserButton /> : <button onClick={()=> openSignIn()} className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-colors'>Create Account</button>}
      </div>
      {/* For Mobile View */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-600 text-sm font-medium'>
        <div className='flex items-center gap-2 sm:gap-5'>
          {user && 
          <> 
          {<button className='hover:text-blue-600 transition-colors' onClick={()=> navigate('/educator')} >{isEducator ? "Educator Dashboard" : "Become Educator"}</button>}
          | <Link to='/my-enrollments' className='hover:text-blue-600 transition-colors'>My Enrollments</Link>
          </>
           }
        </div>
        {
        user ? <UserButton />
         : <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="" className='w-8 h-8' /></button>
         }
      </div>
    </div>
  )
}

export default Navbar