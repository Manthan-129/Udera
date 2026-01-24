const express = require('express');
const {updateRoleToEducator} = require('../controllers/educatorController.js');

const educatorRouter= express.Router();

const { requireAuth } = require('@clerk/express');


// Add Educator Role

educatorRouter.get('/update-role', requireAuth(), updateRoleToEducator);

module.exports= {educatorRouter};