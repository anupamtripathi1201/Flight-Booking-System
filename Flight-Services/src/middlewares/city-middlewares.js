const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/Common')

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message ="Something went wrong while creating City";
        ErrorResponse.error =  {explanation : "Name not given"};
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse
         )
    }
    next()
}

module.exports = {validateCreateRequest};