import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext.jsx'
import { Line } from 'rc-progress';
import Footer from '../../components/student/Footer.jsx';

const MyEnrollments = () => {
  const {enrolledCourses, calculateCourseDuration, navigate } = useContext(AppContext);

  const [progressArray, setProgressArray]= React.useState(
    [
    {lectureCompleted: 2, totalLectures: 4},
    {lectureCompleted: 1, totalLectures: 5},
    {lectureCompleted: 3, totalLectures: 6},
    {lectureCompleted: 4, totalLectures: 4},
    {lectureCompleted: 0, totalLectures: 3},
    {lectureCompleted: 5, totalLectures: 7},
    {lectureCompleted: 6, totalLectures: 8},
    {lectureCompleted: 2, totalLectures: 6},
    {lectureCompleted: 4, totalLectures: 10},
    {lectureCompleted: 3, totalLectures: 5},
    {lectureCompleted: 7, totalLectures: 7},
    {lectureCompleted: 1, totalLectures: 4},
    {lectureCompleted: 0, totalLectures: 2},
    {lectureCompleted: 5, totalLectures: 5}
    ]
  );
  
  return (
    <>
      <div className='min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-8'>My Enrollments</h1>
          
          <div className='bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden'>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead className='bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200'>
                  <tr>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Course</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Duration</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Completed</th>
                    <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Status</th>
                  </tr>
                </thead>
                
                <tbody className='divide-y divide-gray-200'>
                  {enrolledCourses.map((course,index)=>(
                    <tr key={index} className='hover:bg-gray-50 transition-colors duration-200'>
                      <td className='px-6 py-4'>
                        <div className='flex items-center gap-4'>
                          <img src={course.courseThumbnail} alt="course thumbnail" className='w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover flex-shrink-0 shadow-sm'/>
                          
                          <div className='min-w-0'>
                            <p className='font-semibold text-gray-900 text-sm sm:text-base line-clamp-2'>{course.courseTitle}</p>
                            <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted / progressArray[index].totalLectures) * 100 : 0} className= 'bg-gray-300 rounded-full' />
                          </div>
                        </div>
                      </td>
                      
                      <td className='px-6 py-4'>
                        <p className='text-sm font-medium text-gray-700'>{calculateCourseDuration(course)}</p>
                      </td>
                      
                      <td className='px-6 py-4'>
                        <p className='text-sm text-gray-700'>
                          {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`} <span className='text-gray-500'>Lectures</span>
                        </p>
                      </td>
                      
                      <td className='px-6 py-4'>
                        <button onClick={()=>navigate('/player/'+course._id)} className='bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-200 transition-colors duration-200'>
                          {progressArray[index] && progressArray[index].lectureCompleted === progressArray[index].totalLectures ? 'Completed' : 'On Going'}
                        </button>
                      </td>
                    </tr>
                  ))} 
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyEnrollments