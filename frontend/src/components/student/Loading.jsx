import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='text-center'>
        <div className='inline-block w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4'></div>
        <p className='text-xl font-semibold text-gray-700 animate-pulse'>Loading ...</p>
      </div>
    </div>
  )
}

export default Loading