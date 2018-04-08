"use strict";

const bankRepository = require("../repositories/bank-repository");

const bankService = {};

bankService.getAll = async() => {
    let result =  await bankRepository.getAll();
    return result;
};

bankService.login = async() => {
    let result =  await bankRepository.login(email, password);
    return result;
};

bankService.create = async(bank) => {
    let result = await bankRepository.create(bank);
    return result;
};

module.exports = bankService;