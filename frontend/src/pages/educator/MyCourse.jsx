import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from "../../context/AppContext"
import Loading from '../../components/student/Loading.jsx';

const MyCourse = () => {

  const { currency, allCourses }= useContext(AppContext);

  const [courses, setCourses]= useState(null);

  const fetchCourseData= async ()=>{
    setCourses(allCourses);
  }

  useEffect(()=>{
    fetchCourseData();
  },[allCourses]);

  return courses ? (
    <div className='min-h-screen bg-gray-50 py-10 sm:py-12 lg:py-16'>
      <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
        
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10'>
          My Courses
        </h2>

        <div className='bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200'>
                <tr>
                  <th className='px-6 py-5 text-left text-sm sm:text-base font-semibold text-gray-900'>
                    All Courses
                  </th>

                  <th className='px-6 py-5 text-left text-sm sm:text-base font-semibold text-gray-900'>
                    Earning
                  </th>

                  <th className='px-6 py-5 text-left text-sm sm:text-base font-semibold text-gray-900'>
                    Students
                  </th>

                  <th className='px-6 py-5 text-left text-sm sm:text-base font-semibold text-gray-900'>
                    Published On
                  </th>
                </tr>
              </thead>

              <tbody className='divide-y divide-gray-200'>
                {
                  courses.map((course, index)=>(
                    <tr 
                      key={course.id} 
                      className='hover:bg-gray-50 transition-colors duration-200'
                    >
                      <td className='px-6 py-5'>
                        <div className='flex items-center gap-4 sm:gap-5'>
                          <img 
                            src={course.courseThumbnail} 
                            alt="course Thumbnail" 
                            className='w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover flex-shrink-0 shadow-sm border border-gray-200'
                          />

                          <span className='font-semibold text-gray-900 text-sm sm:text-base line-clamp-2'>
                            {course.courseTitle}
                          </span>
                        </div>
                      </td>

                      <td className='px-6 py-5 text-sm sm:text-base font-semibold text-green-600'>
                        {currency} {Math.floor(course.enrolledStudents.length*(course.coursePrice - course.discount*course.coursePrice/100)).toFixed(2)}
                      </td>

                      <td className='px-6 py-5 text-sm sm:text-base font-medium text-gray-700'>
                        {course.enrolledStudents.length}
                      </td>

                      <td className='px-6 py-5 text-sm sm:text-base text-gray-600'>
                        {new Date(course.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
  : <Loading />
}

export default MyCourse