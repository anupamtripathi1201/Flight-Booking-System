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

async function getAirplane(){
    try {
        const airplane = await airplaneRepositories.getAll();
        return airplane;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}
module.exports = {
    createAirplane,
    getAirplane
}

