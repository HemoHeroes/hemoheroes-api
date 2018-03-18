"use strict";

const bankValidator = require("../validators/bank-validator");
const bankMiddleWare = {};


bankMiddleWare.getById = (request, response, next) => {};
bankMiddleWare.create = (request, response, next) => {
    let result = bankValidator.create(request.body);
    if(result.status){
        return response.status(result.status).json({
            message: result.message,
            errors: result.errors
        });
    }
    return next();
};
bankMiddleWare.update = (request, response, next) => {};
bankMiddleWare.delete = (request, response, next) => {};

module.exports = bankMiddleWare;