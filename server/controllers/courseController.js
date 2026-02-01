const Course= require('../models/Course.js');

//Get all Courses
const getAllCourses= async (req, res)=>{
    try{
        const courses= await Course.find({isPublished: true}).select(['-courseContent','-enrolledStudents']).populate({path: 'educator'});

        return res.status(200).json({success: true, courses, message: "Courses fetched successfully"});

    }catch(error){
        console.log("Error fetching all courses:", error);
        return res.status(500).json({success: false, message: "Server error fetching all courses"});
    }
}

// Individual Course details
const getCourseById= async (req, res)=>{
    const {id}= req.params;
    try{
        const course= await Course.findById(id).populate({path: 'educator'});

        //Remove Lecture Urls if isPreviweFree is false
        course.courseContent.forEach(chapter=>{
            chapter.chapterContent.forEach(lecture=>{
                if(!lecture.isPreviewFree){
                    lecture.lectureUrl= "";
                }
            })
        })

        return res.status(200).json({success: true, course, message: "Course fetched successfully"});
    }catch(error){
        console.log("Error fetching course by Id:", error);
        return res.status(500).json({success: false, message: "Server error fetching course By Id"});
    }
}
module.exports= {getAllCourses, getCourseById};