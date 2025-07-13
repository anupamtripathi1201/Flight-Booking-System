const express = require('express');


const route = express.Router();
const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');

//post (thats why middlewares are added) request for vi/airplane

route.post('/', 
FlightMiddlewares.validateCreateRequest,
FlightController.createFlight);

route.get('/',FlightController.getAllFlight);
route.get('/:id',FlightController.getFlight);

//PATCH REQUEST
route.patch('/:id/seats',FlightMiddlewares.validateUpdateRequest,FlightController.updateReaminingSeats)

module.exports = route;

