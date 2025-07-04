const express = require('express');
const {InfoController} = require('../../controllers');
const  AirplaneRoutes  =  require ('./airplane');
const CityRoutes = require('./city');
const AirportRoutes = require('./airport');
const router = express.Router();

router.get('/info',InfoController.info);
router.use('/airplane',AirplaneRoutes);
router.use('/airport',AirportRoutes);
router.use('/city',CityRoutes);


module.exports = router;