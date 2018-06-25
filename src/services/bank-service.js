"use strict";

const bankRepository = require("../repositories/bank-repository");
const subscriberService = require("./../services/subscriber-service");
const donatorsService = require("./../services/donators-service");
const webpush = require("web-push");
const keys = require("config").notification.keys;

const bankService = {};

bankService.getAll = async() => {
    let result =  await bankRepository.getAll();
    return result;
};

bankService.getByEmail = async(email) => {
    let result =  await bankRepository.getByEmail(email);
    return result;
};

bankService.login = async(email, password) => {
    let result =  await bankRepository.login(email, password);
    return result;
};

bankService.create = async(bank) => {
    let result = await bankRepository.create(bank);
    return result;
};

bankService.change = async(bank) => {
    let result = await bankRepository.update(bank["_id"], bank.data);
    return result;
};

bankService.sendPush = async(payload, bloods, hospital, all) => {
    let requestDonation = [];
    
    let getAll = await subscriberService.getAll();
    let users = await donatorsService.getAll();
    users = users.filter(item => item.push == true);

    webpush.setVapidDetails(
        "mailto:hemoheroes@gmail.com",
        keys.public,
        keys.private
    );
    
    const myDate = () => {
        let date = new Date();
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`; 
    };
    
    if (bloods.length > 0) {
        requestDonation = await users.filter(item => bloods.some(i => item.bloodType == i));
        getAll = await getAll.filter(item => requestDonation.some(i => item.client == i.email));
        await getAll.forEach(
            async item => {
                let tmp = item;
                let client = requestDonation.filter(i => i.email == tmp.client);
                let userRequest = Object.assign(hospital, {data: myDate()});
                donatorsService.requestOfBlood(client[0]._id, userRequest);
                delete tmp['client'];
                await webpush
                .sendNotification(tmp, payload)
                .catch(error => {
                    console.log("ocorreu algum erro ao enviar o push ...")
                    console.log('error client ', item.client)
                });
            }
        );
    } else {
        requestDonation = users;
        if (all == false) { 
            getAll = await getAll.filter(item => requestDonation.some(i => item.client == i.email));
        }
        await getAll.forEach(
            async item => {
                let tmp = item;
                let client = requestDonation.filter(i => i.email == tmp.client);
                let userRequest = Object.assign(hospital, {data: myDate()});
                donatorsService.requestOfBlood(client[0]._id, userRequest);
                delete tmp['client'];
                await webpush
                .sendNotification(tmp, payload)
                .catch(error => {
                    console.log("ocorreu algum erro ao enviar o push ...")
                    console.log('error client ', item.client)
                });
            }
        );
    }
    
};

module.exports = bankService;