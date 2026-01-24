import React from 'react'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
      <footer className='bg-gray-900 text-gray-300 py-8 sm:py-10'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8'>
            
            <div className='flex flex-col items-center sm:items-start gap-4'>
              <img 
                src={assets.logo_dark} 
                alt="logo" 
                className='h-10 sm:h-12'
                onClick={()=> scrollTo(0,0)}
              />

              <div className='w-full sm:w-64 h-px bg-gray-700'></div>

              <p className='text-sm sm:text-base text-gray-400 text-center sm:text-left'>
                Copyright 2024 Udera. All Right Reserved.
              </p>
            </div>

            <div className='flex items-center gap-5 sm:gap-6'>
              <a 
                href="#" 
                className='bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300'
              >
                <img 
                  src={assets.facebook_icon} 
                  alt="facebook_icon" 
                  className='w-5 h-5 sm:w-6 sm:h-6'
                />
              </a>

              <a 
                href="#" 
                className='bg-gray-800 hover:bg-blue-400 p-3 rounded-full transition-colors duration-300'
              >
                <img 
                  src={assets.twitter_icon} 
                  alt="twitter_icon" 
                  className='w-5 h-5 sm:w-6 sm:h-6'
                />
              </a>

              <a 
                href="#" 
                className='bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300'
              >
                <img 
                  src={assets.instagram_icon} 
                  alt="instagram_icon" 
                  className='w-5 h-5 sm:w-6 sm:h-6'
                />
              </a>
              
            </div>

          </div>
        </div>
      </footer>
  )
}

export default Footer