"use strict";

const service = require("../services/bank-service");
const controller = {};

controller.getAll = async() => {
    return await service.getAll();
};

module.exports = controller;