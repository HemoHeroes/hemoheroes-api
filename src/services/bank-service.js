"use strict";

const bankRepository = require("../repositories/bank-repository");
const webpush = require("web-push");
const keys = require("config").notification.keys;

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

bankService.sendPush = (subscription, payload) => {
    
    webpush.setVapidDetails(
        "mailto:test@test.com",
        keys.public,
        keys.private
    );

    return webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
    
};

module.exports = bankService;