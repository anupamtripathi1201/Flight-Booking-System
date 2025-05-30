const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/Common')

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message ="Something went wrong while creating Airplane";
        ErrorResponse.error =  {explanation : "model number not given"};
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse
         )
    }
    next()
}

module.exports = {validateCreateRequest};