const express = require('express');


const route = express.Router();
const { CityController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');


//POst request creating a city

route.post('/',CityController.createCity);

module.exports = route;