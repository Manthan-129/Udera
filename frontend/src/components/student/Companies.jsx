import React from 'react'
import {assets} from '../../assets/assets'

const Companies = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 text-lg md:text-xl font-medium mb-10">Trusted by learners from</p>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            <img src={assets.microsoft_logo} alt="Microsoft Logo" className="w-20 md:w-28"/>
            <img src={assets.walmart_logo} alt="Walmart Logo" className="w-20 md:w-28"/>
            <img src={assets.accenture_logo} alt="Accenture Logo" className="w-20 md:w-28"/>
            <img src={assets.adobe_logo} alt="Adobe Logo" className="w-20 md:w-28"/>
            <img src={assets.paypal_logo} alt="PayPal Logo" className="w-20 md:w-28"/>
        </div>
    </div>
  )
}

export default Companies