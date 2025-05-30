const express = require('express');


const route = express.Router();
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

route.post('/', 
AirplaneMiddlewares.validateCreateRequest,
AirplaneController.createAirplane);

module.exports = route;