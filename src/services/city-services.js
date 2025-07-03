const { CityRepositories } = require('../repositories');
const AppError = require('../utils/Error/app-error')
const{ StatusCodes } =  require('http-status-codes');

const cityRepositories = new CityRepositories();

async function createCity(data){
    try {
        const city =  await cityRepositories.create(data);
        return city;
    } catch (error) {
       
        if(error.name=='SequelizeUniqueConstraintError')
{
    throw new AppError('Duplicate entry',StatusCodes.BAD_REQUEST);
}
        if(error.name=='TypeError'){
            throw(new AppError("Cannot create an city",StatusCodes.INTERNAL_SERVER_ERROR));
        }

        throw error;
        
    }

}

async function deleteCity(id){
    try {
        const response = await cityRepositories.destroy(id);
        return response;
        
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('City you requested does not exist',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cant delete the City',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}

module.exports = {
    createCity,
    deleteCity
}