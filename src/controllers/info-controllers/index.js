const { StatusCodes }=require('http-status-codes');


const info = (req,res)=>{
    return res.status(StatusCodes.ACCEPTED).json({
        success:"True",
        msg : " We are live!!"

    });
};
module.exports = {info};