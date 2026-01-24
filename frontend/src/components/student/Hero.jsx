import React from 'react'
import {assets} from '../../assets/assets'
import SearchBar from './SearchBar.jsx'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8'>
        <h1 className='relative font-bold text-gray-800 text-center mb-8 text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight'>Empower your future with the courses designed to <span className='text-blue-600'>fit your choice.</span> <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0'/></h1>

        {/* For Desktop */}
        <p className='md:block hidden text-gray-600 text-xl max-w-3xl mx-auto text-center mb-12 leading-relaxed'>We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.</p>


        {/* For Mobile */}
        <p className='md:hidden text-gray-600 text-lg max-w-md mx-auto text-center mb-10 leading-relaxed'>We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.</p>

        <SearchBar />

    </div>
  )
}

export default Hero