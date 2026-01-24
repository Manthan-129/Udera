import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='py-20 px-4 bg-white'>
        <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900'>Learn anything, anytime, anywhere</h1>
            <p className='text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed'>Incideidunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur comodo do ea.</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <button className='bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg'>Get Started</button>
                <button className='border-2 border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2'>Learn more <img src={assets.arrow_icon} alt="arrow icon" className='w-4 h-4'/></button>
            </div>
        </div>
    </div>
    
  )
}

export default CallToAction