function addrowLockonFlight(flightId){
    return `Select * from Flights where Flights.id = ${flightId} for update`
}

module.exports = {
    addrowLockonFlight
}