const CrudRepositories = require('./CRUD-repositories');
const { Flight,Airplane, Sequelize }= require('../models');

const db = require('../models')
const { addrowLockonFlight } = require('./queries')

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

    async  updateRemainingSeats(flightId, seats, dec = true) {
        const transaction = await db.sequelize.transaction()
        await db.sequelize.query(addrowLockonFlight(flightId),{ transaction });
        try {
            let response;
            if (dec) {
                response = await Flight.decrement('remainingSeats', {
                    by: seats,
                    where: { id: flightId }
                ,transaction});
            } else {
                response = await Flight.increment('remainingSeats', {
                    by: seats,
                    where: { id: flightId }
                ,transaction});
            }
            await transaction.commit();
            return response;
        } catch (error) {
            await transaction.rollback();
            console.error("❌ Error in updateReaminingSeats:", error);
            throw error;
        }
    }

    async getFlightByIdWithAirplane(flightId) {
        const flight = await Flight.findOne({
            where: { id: flightId },
            include: {
                model: Airplane,
                required: true
            }
        });
    
        return flight;
    }
    
    
}

module.exports = FlightRepositories;