"use strict";

const jwt = require("../polices/auth-police");

const authMiddleWare = {};

authMiddleWare.authorize = async(request, response, next) => {
    
    let token = request.body.token || request.query.token || request.headers['x-access-token'] || request.headers['token'];
    let result = await jwt.authorize(token);
    
    if(result == true){
        return next();
    }
    
    return response.status(401).json({
        message: "no authorized"
    });
    
};

authMiddleWare.isAdmin = async(request, response, next)  => {

    let token = request.body.token || request.query.token || request.headers['x-access-token'];
    let result = await jwt.isAdmin(token);
    
    if(result == true){
        return next();
    }
    
    return response.status(401).json({
        message: "no authorized"
    });
    
};

module.exports = authMiddleWare;