const { response } = require('express');
const { AirplaneService } = require('../services');
const { StatusCodes } =  require('http-status-codes');

//POST
//req.body();

async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        return res.status(StatusCodes.CREATED).json({
            success :  true,
            msg : "Airplanes have been created",
            data : airplane,
            error : {}
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            msg : "Something went wrong while creating airplane",
            error : error
        });
        
    }
}

module.exports = {
    createAirplane
}
