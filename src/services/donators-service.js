"use strict";

const donatorsRepository = require("../repositories/donators-repository");

const donatorsService = {};

donatorsService.getAll = async() => {
    let result =  await donatorsRepository.getAll();
    return result;
};

donatorsService.login = async(email, password) => {
    let result =  await donatorsRepository.login(email, password);
    return result;
};

donatorsService.create = async(bank) => {
    let result = await donatorsRepository.create(bank);
    return result;
};

module.exports = donatorsService;