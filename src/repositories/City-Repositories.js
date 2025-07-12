const CrudRepositories = require('./CRUD-repositories');
const { City }= require('../models');

class CityRepositories extends CrudRepositories{
    constructor(){
        super(City);
    }


}

module.exports = CityRepositories;