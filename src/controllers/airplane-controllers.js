const { response } = require('express');
const { AirplaneService } = require('../services');

const { SuccessResponse,ErrorResponse } = require('../utils/Common');
const { StatusCodes } =  require('http-status-codes');


//POST
//req.body();

async function createAirplane(req,res){

    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        SuccessResponse.data = airplane;
        SuccessResponse.message = "Airplanes have been created";

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while creating Airplane";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        
    }
}

async function getAirplane(req,res){
    try {
        const airplanes = await AirplaneService.getAirplane();
        SuccessResponse.data = airplanes;
        return  res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while getting airplane";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        
    }
}

module.exports = {
    createAirplane,
    getAirplane
}
