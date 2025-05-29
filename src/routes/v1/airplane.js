const express = require('express');


const route = express.Router();
const { AirplaneController } = require('../../controllers');

route.post('/', AirplaneController.createAirplane);

module.exports = route;