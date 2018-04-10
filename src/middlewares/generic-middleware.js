"use strict";

const middleware = (request, response, next) => {
    response.append("Cache-Control", "public, max-age=120");
    response.append("Access-Control-Allow-Origin", "*");
    response.append("Access-Control-Allow-Credentials", true)
    response.append("Access-Control-Allow-Methods", ["GET", "POST", "OPTIONS"]);
    response.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    return next();
};

module.exports = middleware;
