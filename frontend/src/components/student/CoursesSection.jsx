import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext.jsx'
import CourseCard from './CourseCard'

const CoursesSection = () => {

    const { allCourses } = useContext(AppContext);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Learn from the best</h2>
        <p className="text-gray-600 text-center text-base md:text-lg max-w-3xl mx-auto mb-12">Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {
                allCourses.slice(0,4).map((course, index)=>(
                    <CourseCard key={index} course={course} />
                ))
            }
        </div>
        <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}
        className="block w-fit mx-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">Explore Courses</Link>
    </div>
  )
}

export default CoursesSection