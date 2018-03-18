"use strict";

const bankDomain = require("../domains/userBank-domain");
const phoneDomain = require("../domains/phones-domain");
const addressDomain = require("../domains/address-domain");
const bankRepository = require("../repositories/bank-repository");

const bankService = {};

bankService.getAll = async() => {
    bankRepository.model = "userBank";
    let result = await bankRepository.getAll();
    return result;
};

module.exports = bankService;