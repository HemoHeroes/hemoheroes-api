"use strict";

const subscriberRepository = require("../repositories/subscriber-repository");
const webpush = require("web-push");
const keys = require("config").notification.keys;

const subscriberService = {};

subscriberService.getAll = async() => {
    let result =  await subscriberRepository.getAll();
    return result;
};

subscriberService.create = async(subscriber) => {
    let result = await subscriberRepository.findOneUpdate(subscriber);
    return result;
};

subscriberService.sendPush = (subscription, payload) => {
    
    webpush.setVapidDetails(
        "mailto:hemoheroes@gmail.com",
        keys.public,
        keys.private
    );

    return webpush
        .sendNotification(subscription, payload)
        .catch(err => console.error(err));
    
};

module.exports = subscriberService;