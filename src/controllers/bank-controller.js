"use strict";

const service = require("../services/bank-service");
const controller = {};

controller.getAll = async() => {
    let result =  await service.getAll();
    return result;
};

controller.login = async(email, password) => {
    let result = await service.login(email, password);
    return result;
};

controller.create = async(bank) => {
    return await service.create(bank);
};

controller.sendPush = (subscription, payload) => {
    return service.sendPush(subscription, payload);
}

module.exports = controller;