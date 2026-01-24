import React from 'react'
import { dummyEducatorData, assets } from '../../assets/assets'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const educatorData = dummyEducatorData

  const { user } = useUser()


  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        <Link to="/">
          <img 
            src={assets.logo} 
            alt="Logo" 
            className="h-10 sm:h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
          />
        </Link>

        <div className="flex items-center gap-5 sm:gap-6">
          
          <p className="text-base sm:text-lg font-semibold text-gray-800">
            Hello! {user ? user.fullName : 'Developers'}
          </p>

          {user ? (
            <UserButton />
          ) : (
            <img 
              src={assets.profile_img} 
              alt="user icon" 
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-gray-300 shadow-sm"
            />
          )}

        </div>

      </div>

    </div>
  )
}

export default Navbar