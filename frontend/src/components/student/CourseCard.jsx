import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext.jsx'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {

    const {currency, calculateRating }= useContext(AppContext);
  return (
    <Link to={'/course/' + course._id} className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group" onClick={()=> scrollTo(0,0)}>
        <img src={course.courseThumbnail} alt="Course Image" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="p-4 space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">{course.courseTitle}</h3>
            <p className="text-sm text-gray-600 font-medium">Udera</p>
            <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-gray-800">{calculateRating(course)}</p>
                <div className="flex items-center gap-0.5">
                    {
                        [...Array(5)].map((_,i)=>(
                            <img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="Rating Block" className="w-4 h-4" />
                        ))
                    }
                </div>
                <p className="text-sm text-gray-500">({course.courseRatings.length})</p>
            </div>
            <p className="text-xl font-bold text-gray-900">{currency}{(course.coursePrice - course.discount*course.coursePrice/100).toFixed(2)}</p>
        </div>
    </Link>
  )
}

export default CourseCard