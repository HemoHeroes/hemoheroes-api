"use strict";

const service = require("../services/bank-service");
const controller = {};

controller.getAll = async() => {
    let result =  await service.getAll();
    return result;
};

controller.create = async(bank) => {
    return await service.create(bank);
};

module.exports = controller;