const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/Common')

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        ErrorResponse.message ="Something went wrong while creating Airplane";
        ErrorResponse.error =  {explanation : "model number not given"};
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse
         )
    }
    if(!req.body.airplaneID){
        ErrorResponse.message ="Something went wrong while creating Airplane";
        ErrorResponse.error =  {explanation : "model number not given"};
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse
         )
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message ="Something went wrong while creating Airplane";
        ErrorResponse.error =  {explanation : "model number not given"};
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse
         )
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message ="Something went wrong while creating Airplane";
        ErrorResponse.error =  {explanation : "model number not given"};
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse
         )
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message ="Something went wrong while creating Airplane";
        ErrorResponse.error =  {explanation : "model number not given"};
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse
         )
    }
    if(!req.body.departureTime){
        ErrorResponse.message ="Something went wrong while creating Airplane";
        ErrorResponse.error =  {explanation : "model number not given"};
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse
         )
    }
    if(!req.body.price){
        ErrorResponse.message ="Something went wrong while creating Airplane";
        ErrorResponse.error =  {explanation : "model number not given"};
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse
         )
    }
    if(!req.body.remainingSeats){
        ErrorResponse.message ="Something went wrong while creating Airplane";
        ErrorResponse.error =  {explanation : "model number not given"};
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse
         )
    }
    next();
}

function validateUpdateRequest(req,res,next){
    if(!req.body.seats){
        ErrorResponse.message ="Something went wrong while updating Airplane";
        ErrorResponse.error =  {explanation : "seats not given"};
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse
         )
    }
    next();


}

module.exports = {validateCreateRequest
,
validateUpdateRequest};