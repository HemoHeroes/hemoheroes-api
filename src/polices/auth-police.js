"use strict";

const saltKey = require("config").get("auth.saltKey");
const jwt = require("jsonwebtoken");
const auth = {};

auth.generateToken = (data, expires) => {
    return jwt.sign(JSON.parse(JSON.stringify(data)), saltKey, { expiresIn: expires || "1d" });
};

auth.decodeToken = async (token) => {
    let data = await jwt.verify(token, saltKey);
    return data;
};

auth.verifyToken = (token) => {
    jwt.verify(token, saltKey, function (error, decoded) {
        if (error) {
            return false;
        } else {
            return true;
        }
    });
};

auth.authorize = async(token) => {
    return new Promise(
        (resolve, reject) => {
            if(!token){
                return resolve(null);
            }else{
                jwt.verify(token, saltKey, async(error, decoded) => {
                    if (error) {
                        return resolve(false);
                    } else {
                        return resolve(true);
                    }
                });
            }
        }
    );
};

auth.isAdmin = (token) => {
    return new Promise(
        (resolve, reject) => {
            if(!token){
                return resolve(null);
            }else{
                jwt.verify(token, saltKey, function (error, decoded) {
                    if (error) {
                        return resolve(false);
                    } else {
                        if (decoded.roles.includes("admin")) {
                            return resolve(true);
                        } else {
                            return resolve(false);
                        }
                    }
                });
            }
        }
    );
};


module.exports = auth;