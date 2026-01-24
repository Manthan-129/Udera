import React, { useContext, useEffect, useState } from 'react'
import {AppContext} from '../../context/AppContext.jsx'
import {assets} from '../../assets/assets.js'
import humanizeDuration from 'humanize-duration'
import {useParams} from 'react-router-dom'
import Youtube from 'react-youtube';
import Footer from '../../components/student/Footer.jsx';
import Rating from '../../components/student/Rating.jsx';

const Player = () => {

  const { enrolledCourses, calculateChapterTime}= useContext(AppContext);

  const {courseId}= useParams();
  const [courseData, setCourseData]= useState(null);
  const [openSections, setOpenSections]= useState({});
  const [playerData, setPlayerData]= useState(null);


  const getCourseData = async ()=>{
    enrolledCourses.map((course)=>{
      if(course._id === courseId){
        setCourseData(course);
      }
    })
  }

  useEffect(()=>{
    getCourseData();
  },[enrolledCourses])

  

  const toggleSection = (index)=>{
    setOpenSections((prev)=>(
      {...prev,
      [index] :!prev[index],
      }
    ))
  }
  
  return (

    <> 
      <div className='min-h-screen bg-gray-50 py-6 sm:py-8 lg:py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
          
          {/* Left Column */}
          <div className='lg:col-span-1 space-y-6'>
            <div className='bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden'>
              <div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 border-b border-gray-200'>
                <h2 className='text-xl sm:text-2xl font-bold text-gray-900'>Course Structure</h2>
              </div>

              <div className='p-4 sm:p-6 space-y-2 sm:space-y-3 max-h-[600px] overflow-y-auto'>
                { courseData && 
                  courseData.courseContent.map((chapter, index)=>(
                    <div 
                      key={index} 
                      className='border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-200'
                    >
                      <div 
                        onClick={()=> toggleSection(index)} 
                        className='bg-gray-50 hover:bg-blue-50 cursor-pointer transition-colors duration-200 p-3 sm:p-4 lg:p-5'
                      >
                        <div className='flex items-center justify-between gap-2'>
                          <div className='flex items-center gap-2 sm:gap-3 flex-1 min-w-0'>
                            <img 
                              className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform transition-transform duration-300 ${openSections[index] ? 'rotate-180' : ''}`}
                              src={assets.down_arrow_icon} 
                              alt="arrow icon" 
                            />
                            <p className='font-semibold text-gray-900 text-sm sm:text-base truncate'>
                              {chapter.chapterTitle}
                            </p>
                          </div>

                          <p className='text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap'>
                            {chapter.chapterContent.length} lectures • {calculateChapterTime(chapter)}
                          </p>
                        </div>
                      </div>

                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openSections[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                        <ul className='bg-white divide-y divide-gray-100'>
                          { 
                            chapter.chapterContent.map((lecture, idx)=>(
                              <li 
                                key={idx} 
                                className='p-3 sm:p-4 hover:bg-blue-50 transition-colors duration-200 cursor-pointer'
                              >
                                <div className='flex items-start gap-3 sm:gap-4'>
                                  <img 
                                    src={false ? assets.blue_tick_icon : assets.play_icon} 
                                    alt="play icon" 
                                    className='w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0 opacity-70'
                                  />

                                  <div className='flex-1 min-w-0'>
                                    <p className='font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base'>
                                      {lecture.lectureTitle}
                                    </p>

                                    <div className='flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 flex-wrap'>
                                      {lecture.lectureUrl && (
                                        <p 
                                          onClick={() => {setPlayerData({
                                            ...lecture, 
                                            chapter: index + 1, 
                                            lecture: idx+1 
                                          });
                                          }} 
                                          className='bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full font-semibold text-xs hover:bg-green-200 transition-colors'
                                        >
                                          Watch
                                        </p>
                                      )}

                                      <p className='hidden'>{lecture.lectureDuration}</p>
                                      
                                      <p className='flex items-center gap-1 sm:gap-1.5'>
                                        <svg 
                                          className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" 
                                          fill="none" 
                                          stroke="currentColor" 
                                          viewBox="0 0 24 24"
                                        >
                                          <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                                          />
                                        </svg>
                                        {humanizeDuration(lecture.lectureDuration*60*1000, {units: ["h","m"]})}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>  
                  ))
                }
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-md border border-gray-200 p-6'>
              <h1 className='text-xl font-bold text-gray-900 mb-4'>Rate this Course:</h1>
              <Rating initialRating={0} />
            </div>

          </div>

          {/* Right Column */}
          <div className='lg:col-span-2'>
            <div className='sticky top-6 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden'>
              {playerData ? (
                <div className='space-y-4'>
                  <div className='relative w-full'>
                    <Youtube 
                      videoId={playerData.lectureUrl.split('/').pop()} 
                      opts={{
                        width: '100%',
                        height: '100%',
                        playerVars: {
                          autoplay: 1
                        }
                      }} 
                      className='w-full aspect-video'
                      iframeClassName='w-full h-full' 
                    />
                  </div>
                  <div className="flex justify-end px-6">
                    <button
                      onClick={() => setPlayerData(null)}
                      className="bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-100 transition"
                    >
                      Close video
                    </button>
                  </div>

                  <div className='p-6 flex items-center justify-between border-t border-gray-200'>
                    <p className='text-lg font-semibold text-gray-900'>
                      {playerData.chapter} . {playerData.lecture} {playerData.lectureTitle}
                    </p>

                    <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg'>
                      {false ? 'Completed' : 'Mark as Completed'}
                    </button>
                  </div>
                </div>
              )
              :
              <img 
                src={courseData ? courseData.courseThumbnail : ''} 
                alt="Course Thumbnail" 
                className='w-full h-auto object-cover'
              />
              }
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Player