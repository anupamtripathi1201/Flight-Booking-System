const { response } = require('express');
const { AirportService } = require('../services');

const { SuccessResponse,ErrorResponse } = require('../utils/Common');
const { StatusCodes } =  require('http-status-codes');
const AppError = require('../utils/Error/app-error');


//POST
//req.body();

async function createAirport(req,res){

    try {
        const airport = await AirportService.createAirport({
            name : req.body.name,
            code : req.body.code,
            address : req.body.address,
            cityId : req.body.cityId
        });
        SuccessResponse.data = airport;
        SuccessResponse.message = "Airport have been created";

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.message = "Something went wrong while creating Airport";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        
    }
}

async function getAirports(req,res){
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return  res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong while getting airports";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        
    }
}

async function getAirport(req,res){
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return  res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
       
        ErrorResponse.message = "Something went wrong while getting airport";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        
    }
}

async function deleteAirport(req,res){
    try {
        const response = await AirplaneService.deleteAirport(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
               
        ErrorResponse.message = "Something went wrong while deleting airport";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

        
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    deleteAirport
}
