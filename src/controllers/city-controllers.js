const { response } = require('express');
const { CityService } = require('../services');

const { SuccessResponse,ErrorResponse } = require('../utils/Common');
const { StatusCodes } =  require('http-status-codes');
const AppError = require('../utils/Error/app-error');


//POST
//req.body();

async function createCity(req,res){

    try {
        const city = await CityService.createCity({
          name : req.body.name
        });
        SuccessResponse.data = city;
        SuccessResponse.message = "City have been created";

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        if (error instanceof AppError) {
            ErrorResponse.message = error.explanation;
            ErrorResponse.error = error;
            return res.status(error.statusCode).json(ErrorResponse);
        }
        ErrorResponse.message = "Something went wrong while City";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        
    }
}

async function deleteCity(req,res){
    try {
        const response =await  CityService.deleteCity(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
              
        ErrorResponse.message = "Something went wrong while deleting City";

        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);

        
    }
}

module.exports = {
    createCity,
    deleteCity
}

