const CrudRepositories = require('./CRUD-repositories');
const { Airplane }= require('../models');

class AirplaneRepositories extends CrudRepositories{
    constructor(){
        super(Airplane);
    }


}

module.exports = AirplaneRepositories;