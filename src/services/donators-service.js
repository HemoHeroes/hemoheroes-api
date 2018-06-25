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

donatorsService.create = async(donator) => {
    let result = await donatorsRepository.create(donator);
    return result;
};

donatorsService.change = async (donator) => {
    let result = await donatorsRepository.update(donator["_id"], donator.data);
    return result;
};

donatorsService.requestOfBlood = async (id, donator) => {
    let result = await donatorsRepository.push(id, donator);
    return result;
};


module.exports = donatorsService;