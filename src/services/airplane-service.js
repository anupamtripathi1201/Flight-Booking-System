const { AirplaneRepositories } = require('../repositories');

const airplaneRepositories = new AirplaneRepositories();

async function createAirplane(data){
    try {
        const airplane =  await airplaneRepositories.create(data);
        return airplane;
    } catch (error) {
        throw error;
        
    }

}
module.exports = {
    createAirplane
}

