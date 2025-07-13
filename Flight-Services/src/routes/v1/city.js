const express = require('express');


const route = express.Router();
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');


//POst request creating a city

route.post('/',CityMiddlewares.validateCreateRequest,CityController.createCity);

//GET request for deleting the city
route.get('/:id',CityController.deleteCity);

module.exports = route;