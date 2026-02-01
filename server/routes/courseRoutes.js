const express= require('express');
const courseRouter= express.Router();

const {getAllCourses, getCourseById}= require('../controllers/courseController.js');

courseRouter.get('/all', getAllCourses);
courseRouter.get('/:id', getCourseById);

module.exports= courseRouter;