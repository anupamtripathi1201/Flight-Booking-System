const { FlightRepositories } = require('../repositories');
const AppError = require('../utils/Error/app-error')
const { Op } = require('sequelize')
const{ StatusCodes } =  require('http-status-codes');


const flightRepositories = new FlightRepositories();

async function createFlight(data){
    try {
        const flight =  await flightRepositories.create(data);
        return flight;
    } catch (error) {
       
        if(error.name=='TypeError'){
            throw(new AppError("Cannot create a flight",StatusCodes.INTERNAL_SERVER_ERROR));
        }

        throw error;
        
    }

}

async function getAllFlights(query){
    let customFilter = {};
    //trips = MUM-DEL
    if(query.trips){
    [departureAirportId,arrivalAirportId] = query.trips.split('-');
    if(departureAirportId=== arrivalAirportId){
        throw new AppError('Departure ID cannot be same as arrival ID',StatusCodes.BAD_REQUEST);
    }
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;}


    if(query.price){
        [minimum,maximum] = query.price.split('-');
        customFilter.price = {
            [Op.between] : [minimum,maximum]
        }

    }
    try {
        const airports = await flightRepositories.getAllFlights(customFilter);
        return airports;
    } catch (error) {
        console.log(error)
        throw new AppError('Cannot fetch the flights ',StatusCodes.INTERNAL_SERVER_ERROR)
        
    }
    
}

async function getFlight(id){
    try {
        const flight = await flightRepositories.getFlightByIdWithAirplane(id);
        
        return flight;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('Flight you requested does not exist',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of the flights',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

async function updateSeats(data){
    try {
        const response = await flightRepositories.updateRemainingSeats(data.flightId,data.seats,data.dec);
        return response;
    } catch (error) {
        console.log(error);
        throw new AppError('Cannot update data of the flights',StatusCodes.INTERNAL_SERVER_ERROR);
        
        
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats

}