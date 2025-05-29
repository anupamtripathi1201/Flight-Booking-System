const express = require('express');
const {InfoController} = require('../../controllers');
const  AirplaneRoutes  =  require ('./airplane');
const router = express.Router();

router.get('/info',InfoController.info);
router.use('/airplane',AirplaneRoutes);


module.exports = router;