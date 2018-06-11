"use strict";

const service = require("../services/donators-service");
const controller = {};

controller.getAll = async() => {
    let result =  await service.getAll();
    return result;
};

controller.login = async(email, password) => {
    let result = await service.login(email, password);
    return result;
};

controller.create = async(donator) => {
    return await service.create(donator);
};

controller.change = async(donator) => {
    return await service.change(donator);
};

module.exports = controller;