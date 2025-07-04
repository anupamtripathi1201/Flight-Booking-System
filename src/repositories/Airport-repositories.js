const CrudRepositories = require('./CRUD-repositories');
const { Airport }= require('../models');

class AirportRepositories extends CrudRepositories{
    constructor(){
        super(Airport);
    }


}

module.exports = AirportRepositories;