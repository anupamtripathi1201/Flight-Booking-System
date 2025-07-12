const { AirportRepositories } = require('../repositories');
const AppError = require('../utils/Error/app-error')
const{ StatusCodes } =  require('http-status-codes');

const airportRepositories = new AirportRepositories();

async function createAirport(data){
    try {
        const airport=  await airportRepositories.create(data);
        return airport;
    } catch (error) {
        if(error.name=='TypeError'){
            throw(new AppError("Cannot create an airport",StatusCodes.INTERNAL_SERVER_ERROR));
        }

        throw error;
        
    }

}

async function getAirports(){
    try {
        const airports = await airportRepositories.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}


async function getAirport(id){
    try {
        const airport = await airportRepositories.get(id);
        
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('Airport you requested does not exist',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of all the airorts',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

async function deleteAirport(id){
    try {
        const response = await airportRepositories.destroy(id);
        return response;
        
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('Airport you requested does not exist',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cant delete the airport',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

module.exports = {
    createAirport,
    getAirport,
    getAirports,
    deleteAirport
}

