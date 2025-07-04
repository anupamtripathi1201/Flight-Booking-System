const express = require('express');

const route= express.Router();
const { AirportController }= require('../../controllers');
const { AirportMiddlewares } = require('../../middlewares');


//post (thats why middlewares are added) request for vi/airports

route.post('/', 
AirportMiddlewares.validateCreateRequest,
AirportController.createAirport);


//get request for v1/airports

route.get('/',AirportController.getAirports);

route.get('/:id',AirportController.getAirport);

//Delete request

route.delete('/:id',AirportController.deleteAirport);

module.exports = route;