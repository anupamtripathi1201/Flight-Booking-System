const CrudRepositories = require('./CRUD-repositories');
const { Flight,Airplane, Sequelize }= require('../models');

class FlightRepositories extends CrudRepositories{
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter){
        const response = await Flight.findAll({
            where : filter,
            //Include is going to do join so that i can have my airplane detail as well 
            //include : {model : Airplane}
            include :{
                model:Airplane,
                required : true,
            
            }
         
        });
        return response;
    }


}

module.exports = FlightRepositories;