import React from 'react'
import { assets } from '../../assets/assets.js'
import {AppContext} from '../../context/AppContext.jsx'
import {useContext} from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

  const {isEducator}= useContext(AppContext);
  
  const menuItems= [
    {name: 'Dashboard', path: '/educator', icon: assets.home_icon},
    {name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon},
    {name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon},
    {name: 'Students Enrolled', path: '/educator/students-enrolled', icon: assets.person_tick_icon},
  ]

  return isEducator && (
    <div className='min-h-screen bg-white border-r border-gray-200 w-64 lg:w-72 py-8 px-4 sm:px-6 shadow-sm'>
      <div className='space-y-3'>
        {
          menuItems.map((item, index)=>(
            <NavLink 
              to={item.path} 
              key={index} 
              end={item.path === '/educator'}
              className={({isActive}) => `
                flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300
                ${isActive 
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 shadow-sm font-semibold' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-l-4 border-transparent'
                }
              `}
            >
              <img 
                src={item.icon} 
                alt={item.name} 
                className='w-6 h-6 sm:w-7 sm:h-7'
              />

              <p className='text-base sm:text-lg font-medium'>
                {item.name}
              </p>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default SideBar