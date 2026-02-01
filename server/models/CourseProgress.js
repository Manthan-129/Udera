const mongoose= require('mongoose');

const CourseProgressSchema= new mongoose.Schema({
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true},
    courseId: {type: mongoose.Types.ObjectId, ref: 'Course', required: true},
    completed: {type: Boolean, default: false}, // Array of lectureIds
    lectureCompleted: [{type: String}],
},{timestamps: true, minimize: false});

module.exports= mongoose.model('CourseProgress', CourseProgressSchema);