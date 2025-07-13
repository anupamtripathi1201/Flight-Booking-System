const { Logger } =  require('../config');
const AppError = require('../utils/Error/app-error');
const { StatusCodes } = require('http-status-codes');

class CrudRepositories{
    constructor(model){
        this.model = model;
    }

    async create(data){
        
            const response = await this.model.create(data);
            return response;
        
        
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where : {
                    id : data
                }
            })
            if(!response){
                throw new AppError('Cannot get the object',StatusCodes.NOT_FOUND);
            };
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo : Destroy");
            throw error;
            
        }
    }


    async get(data){
    
            const response = await this.model.findByPk(data);
            if(!response){
                throw new AppError('Cannot get the object',StatusCodes.NOT_FOUND);
            }
            return response;
    }


    async getAll(){
    
            const response = await this.model.findAll();
            return response;
     
    }

    async update(id,data){
        try {
            const response = await this.model.update(data,{
                where : {
                    id : id
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo : Update");
            throw error;
            
        }
    }

}

module.exports = CrudRepositories;