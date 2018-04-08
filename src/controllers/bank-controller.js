"use strict";

const service = require("../services/bank-service");
const controller = {};

controller.getAll = async() => {
    let result =  await service.getAll();
    return result;
};

controller.login = async() => {

};

controller.create = async(bank) => {
    return await service.create(bank);
};

module.exports = controller;