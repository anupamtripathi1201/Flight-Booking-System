const { Logger } =  require('../config');

class CrudRepositories{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo : Create");
            throw error;
            
        }
        
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where : {
                    id : data
                }
            });
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo : Destroy");
            throw error;
            
        }
    }


    async get(data){
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo : Get");
            throw error;
            
        }
    }


    async getAll(){
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo : Get All");
            throw error;
            
        }
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