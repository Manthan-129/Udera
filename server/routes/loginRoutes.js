const express= require('express');
const { loginUser, signupUser, userInfo }= require('../controllers/loginController.js');
const { authMiddleware } = require('../middlewares/authMiddleware.js');

const loginRouter= express.Router();

loginRouter.post('/login', loginUser);
loginRouter.post('/signup', signupUser);
loginRouter.get('/user-info',authMiddleware, userInfo);

module.exports= loginRouter;