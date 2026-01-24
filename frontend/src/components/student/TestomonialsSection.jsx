import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'
import {Link} from 'react-router-dom'

const TestomonialsSection = () => {
  return (
    <div className='py-16 px-4 bg-gray-50'>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-4'>Testimonial</h2>
        <p className='text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed'>Hear from our learners as they share their journeys of transformation, success, and how our <br /> platform has made a difference in their lives.</p>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                dummyTestimonial.map((item, index)=>(
                    <div key={index} className='bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col'>
                        <div className='flex items-center gap-4 mb-4'>
                            <img src={item.image} alt={item.name} className='w-16 h-16 rounded-full object-cover border-2 border-gray-200'/>
                            <div className='flex-1'>
                                <h1 className='text-lg font-semibold text-gray-900'>{item.name}</h1>
                                <p className='text-sm text-gray-500'>{item.role}</p>
                            </div>
                        </div>
                        <div className='flex-1'>
                                <div className='flex gap-1 mb-3'>
                                    {
                                        [...Array(5)].map((_,i)=>(
                                            <img key={i} src={i < Math.floor(item.rating) ? assets.star : assets.star_blank} alt="Rating Block" className="w-4 h-4" />
                                        ))
                                    }
                                </div>
                                <p className='text-gray-700 text-sm leading-relaxed line-clamp-4'>{item.feedback}</p>
                            </div>
                            <Link href="#" className='text-blue-600 hover:text-blue-800 font-medium text-sm mt-4 inline-block transition-colors duration-200'>Read more</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TestomonialsSection