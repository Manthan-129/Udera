import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../student/Loading.jsx'

const Navbar = () => {

  const { user, loading, logoutUser } = useContext(AppContext)

  if (loading) {
    return <Loading />
  }

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/">
          <img 
            src={assets.logo} 
            alt="Logo" 
            className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
          />
        </Link>

        {/* User Info */}
        <div className="flex items-center gap-5 sm:gap-6">

          <p className="text-base sm:text-lg font-semibold text-gray-800">
            Hello! {user.firstName}
          </p>

          <div className="flex items-center gap-3">
            <img
              src={assets.local_img}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 shadow-sm"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
