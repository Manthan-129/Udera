const express= require('express');
const userRouter= express.Router();

const {authMiddleware}= require('../middlewares/authMiddleware.js');
const {getUserData, userEnrolledCourses, purchaseCourse, verifyStripePayment, updateUserCourseProgress, getUserCourseProgress, addUserRating}= require('../controllers/userController.js');

userRouter.get('/data', authMiddleware, getUserData);
userRouter.get('/enrolled-courses', authMiddleware, userEnrolledCourses);
userRouter.post('/purchase', authMiddleware, purchaseCourse);
userRouter.post('/verify-payment', authMiddleware, verifyStripePayment);

userRouter.post('/update-course-progress', authMiddleware, updateUserCourseProgress);
userRouter.post('/get-course-progress', authMiddleware, getUserCourseProgress);

userRouter.post('/add-rating', authMiddleware, addUserRating);
module.exports= userRouter; 