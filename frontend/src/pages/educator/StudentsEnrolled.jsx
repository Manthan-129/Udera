import React ,{useEffect, useState} from 'react'
import { dummyStudentEnrolled } from '../../assets/assets'
import Loading from '../../components/student/Loading.jsx';

const StudentsEnrolled = () => {

  const studentData= dummyStudentEnrolled

  const [enrolledStudents, setEnrolledStudents]= useState(null);

  const fetchEnrolledStudents= async ()=>{
    setEnrolledStudents(studentData);
  }

  useEffect(()=>{
    fetchEnrolledStudents();
  },[]);

  return enrolledStudents ? (
    <div className='min-h-screen bg-gray-50 py-10 sm:py-12 lg:py-16'>
      <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
        <table className='w-full bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden'>
          <thead className='bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200'>
            <tr>
              <th className='px-6 py-5 text-left text-sm sm:text-base font-semibold text-gray-900'>
                #
              </th>

              <th className='px-6 py-5 text-left text-sm sm:text-base font-semibold text-gray-900'>
                Student name
              </th>

              <th className='px-6 py-5 text-left text-sm sm:text-base font-semibold text-gray-900'>
                Course Title
              </th>

              <th className='px-6 py-5 text-left text-sm sm:text-base font-semibold text-gray-900'>
                Date
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {
              enrolledStudents.map((item, index)=>(
                <tr 
                  key={index} 
                  className='hover:bg-gray-50 transition-colors duration-200'
                >
                  <td className='px-6 py-5 text-sm sm:text-base font-medium text-gray-700'>
                    {index + 1}
                  </td>

                  <td className='px-6 py-5'>
                    <div className='flex items-center gap-4'>
                      <img 
                        src={item.student.imageUrl} 
                        alt="student icon" 
                        className='w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-sm'
                      />

                      <span className='font-semibold text-gray-900 text-sm sm:text-base'>
                        {item.student.name}
                      </span>
                    </div>
                  </td>

                  <td className='px-6 py-5 text-sm sm:text-base font-medium text-gray-700'>
                    {item.courseTitle}
                  </td>

                  <td className='px-6 py-5 text-sm sm:text-base text-gray-600'>
                    {new Date(item.purchaseDate).toLocaleDateString()}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  ) : <Loading />
}

export default StudentsEnrolled