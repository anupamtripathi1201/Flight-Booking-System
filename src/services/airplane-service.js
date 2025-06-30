const { AirplaneRepositories } = require('../repositories');
const AppError = require('../utils/Error/app-error')
const{ StatusCodes } =  require('http-status-codes');

const airplaneRepositories = new AirplaneRepositories();

async function createAirplane(data){
    try {
        const airplane =  await airplaneRepositories.create(data);
        return airplane;
    } catch (error) {
        if(error.name=='TypeError'){
            throw(new AppError("Cannot create an airplane",StatusCodes.INTERNAL_SERVER_ERROR));
        }

        throw error;
        
    }

}

async function getAirplanes(){
    try {
        const airplanes = await airplaneRepositories.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}


async function getAirplane(id){
    try {
        const airplane = await airplaneRepositories.get(id);
        
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('Airplane you requested does not exist',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

async function deleteAirplane(id){
    try {
        const response = await airplaneRepositories.destroy(id);
        return response;
        
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('Airplane you requested does not exist',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cant delete the airplane',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane
}

