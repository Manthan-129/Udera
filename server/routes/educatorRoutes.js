const express = require('express');
const {updateRoleToEducator} = require('../controllers/educatorController.js');

const educatorRouter= express.Router();

// Add Educator Role

educatorRouter.get('/update-role', updateRoleToEducator);

module.exports= {educatorRouter};