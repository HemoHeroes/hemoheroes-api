"use strict";

const jwt = require("../polices/auth-police");

const authMiddleWare = {};

authMiddleWare.authorize = (request, response, next) => {

    let token = request.body.token || request.query.token || request.headers["x-access-token"];

    if(!token){
        return response.status(401).json({
            message: "Acesso Restrito"
        });
    }else{
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                return response.status(401).json({
                    message: "Token Inválido"
                });
            } else {
                return next();
            }
            
        });
    }
};

authMiddleWare.isAdmin = (request, response, next) => {

    let token = request.body.token || request.query.token || request.headers["x-access-token"];
    
    if(!token){
        return response.status(401).json({
            message: "Token Inválido"
        });
    }else{
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                return response.status(401).json({
                    message: "Token Inválido"
                });
            } else {
                if (decoded.roles.includes("admin")) {
                    return next();
                } else {
                    return response.status(403).json({
                        message: "Está funcionalidade é restrita para administrador"
                    });
                }
            }
        });
    }
};

module.exports = authMiddleWare;