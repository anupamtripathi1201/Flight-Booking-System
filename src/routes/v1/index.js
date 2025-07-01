const express = require('express');
const {InfoController} = require('../../controllers');
const  AirplaneRoutes  =  require ('./airplane');
const CityRoutes = require('./city');
const router = express.Router();

router.get('/info',InfoController.info);
router.use('/airplane',AirplaneRoutes);
router.use('/city',CityRoutes);


module.exports = router;