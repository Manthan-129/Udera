import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/educator/Navbar.jsx'
import SideBar from '../../components/educator/SideBar.jsx'
import Footer from '../../components/educator/Footer.jsx'

const Educator = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      
      <div className='flex flex-1'>
        <SideBar />
        
        <div className='flex-1 bg-gray-50 overflow-auto'>
          <div className='min-h-full'>
            <Outlet />
          </div>
        </div>
       
      </div>

      <Footer />
    </div>
  )
}

export default Educator