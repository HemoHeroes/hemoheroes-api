"use strict";
const saltKey = require("config").get("auth.saltKey");
const jwt = require("jsonwebtoken");
const auth = {};

auth.generateToken = async (data) => {
    return jwt.sign(data, saltKey, { expiresIn: "1d" });
};

auth.decodeToken = async (token) => {
    let data = await jwt.verify(token, saltKey);
    return data;
};

auth.verifyToken = function (token) {
    jwt.verify(token, saltKey, function (error, decoded) {
        if (error) {
            return false;
        } else {
            return true;
        }
    })
};

module.exports = auth;