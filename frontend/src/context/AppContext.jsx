import React, { useEffect , useState } from 'react'
import {createContext} from 'react'
import {dummyCourses} from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import humanizeDuration from 'humanize-duration'
import { useAuth , useUser } from '@clerk/clerk-react';

export const AppContext= createContext();

export const AppContextProvider = (props) => {

    const currency= import.meta.env.VITE_CURRENCY; 

    const navigate= useNavigate();

    const { getToken }= useAuth();
    const { user }= useUser();

    const logToken= async ()=>{
      console.log(await getToken());
    }
    useEffect(()=>{
      if(user){
      logToken();   
      }
    },[user])

    const [allCourses, setAllCourses]= useState([]);

    const [isEducator, setEducator]= useState(true);

    const [enrolledCourses, setEnrolledCourses]= useState([]);

    // Fetch All Courses
    const fetchAllCourses = async ()=>{
      setAllCourses(dummyCourses);
    }

    useEffect(()=>{
      fetchAllCourses();
    },[])

    // Function to calculate average Rating of Course
    const calculateRating= (course)=>{
      if(course.courseRatings.length === 0) return 0;
      let totalRating = 0;
      course.courseRatings.forEach(rating=>{
        totalRating+= rating.rating;
      })

      totalRating= totalRating / course.courseRatings.length;
      return totalRating;
    }

    // Function to Calculate Course Chapter Time
    const calculateChapterTime= (chapter)=>{
      let totalTime= 0;
      chapter.chapterContent.map((lecture)=>{
        totalTime+= lecture.lectureDuration;
      })
      return humanizeDuration(totalTime*60*1000, {units: ["h","m"]});
    }

    const calculateCourseDuration= (course)=>{
      let totalTime= 0;
      course.courseContent.map((chapter)=> chapter.chapterContent.map((lecture)=>{
        totalTime+= lecture.lectureDuration;
      }))
      return humanizeDuration(totalTime*60*1000, {units: ["h","m"]});
    }

    const calculateNumberOfLectures= (course)=>{
      let totalLectures= 0;
      course.courseContent.map((chapter)=> {
        if(Array.isArray(chapter.chapterContent)){
          totalLectures+= chapter.chapterContent.length;
        }
      });
      return totalLectures;
    }

    //Fetch User Enrolled Courses
    const fetchUserEnrolledCourses= async ()=>{
      // API Call to fetch enrolled coursess
      setEnrolledCourses(dummyCourses);
    }

    useEffect(()=>{
      fetchUserEnrolledCourses();
    },[])

    const value = {
        currency,
        allCourses, setAllCourses,
        navigate,
        calculateRating,
        isEducator, setEducator,
        calculateChapterTime, calculateCourseDuration, calculateNumberOfLectures,
        enrolledCourses, setEnrolledCourses, fetchUserEnrolledCourses
    }
  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}
