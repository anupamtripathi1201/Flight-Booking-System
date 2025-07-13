const { response } = require('express');
const { FlightService } = require('../services');

const { SuccessResponse,ErrorResponse } = require('../utils/Common');
const { StatusCodes } =  require('http-status-codes');
const AppError = require('../utils/Error/app-error');


//POST
//req.body();
/*{
flightNumber:
airplaneID:
arrivalAirportId:
departureAirportId;
arrivalTime:
departureTime:
price:
remainingSeats:
}*/

async function createFlight(req,res){

    try {
        const flight = await FlightService.createFlight({
            flightNumber : req.body.flightNumber,
            airplaneID : req.body.airplaneID,
            arrivalAirportId : req.body.arrivalAirportId,
            departureAirportId : req.body.departureAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price,
            remainingSeats : req.body.remainingSeats

        });
        SuccessResponse.data = flight;
        SuccessResponse.message = "Flight have been created";

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        
        ErrorResponse.message = "Something went wrong while creating Flight";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        
    }
}


async function getAllFlight(req,res){
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return  res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
       
        ErrorResponse.message = "Something went wrong while getting flight";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        
    }
}

async function getFlight(req,res){
    try {
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight;
        return  res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
      
        ErrorResponse.message = "Something went wrong while getting flight";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        console.log(error);
    }
}
async function updateReaminingSeats(req,res){
    try {
        const response = await FlightService.updateSeats({
            flightId : req.params.id,
            seats : req.body.seats,
            dec : req.body.dec
        })
        SuccessResponse.data = response;
        return  res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
       console.log(error);
        ErrorResponse.message = "Something went wrong while updating flight";
        ErrorResponse.error = error;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        
    }
}



module.exports = {
    createFlight,
    getAllFlight,
    getFlight,
    updateReaminingSeats
}