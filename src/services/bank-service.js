"use strict";

const bankDomain = require("../domains/userBank-domain");
const phoneDomain = require("../domains/phones-domain");
const addressDomain = require("../domains/address-domain");
const bankRepository = require("../repositories/bank-repository");

const bankService = {};

bankService.getAll = async() => {
    let result =  await bankRepository.getAll();
    return result;
};

bankService.create = async(bank) => {
    let result = await bankRepository.create(bank);
    return result;
};

module.exports = bankService;