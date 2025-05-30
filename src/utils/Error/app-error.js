class AppError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statuscode;
        this.explanation = message;
    }
}

module.exports = AppError;