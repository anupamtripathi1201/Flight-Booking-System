const express = require('express');


const route = express.Router();
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

//post (thats why middlewares are added) request for vi/airplane

route.post('/', 
AirplaneMiddlewares.validateCreateRequest,
AirplaneController.createAirplane);


//get request for v1/airplanes

route.get('/',AirplaneController.getAirplane)

module.exports = route;