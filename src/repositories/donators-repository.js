"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        name : String,
        password : String,
        email : String,
        dateOfBirth: String,
        bloodType : String,
        genre : String,
        push: Boolean,
        lastDonate: String,
        notification: Object,
        requestOfBlood: []
        
    },
    {
        versionKey:false
    }
);

const donators = mongoose.model("donators", schema, "donators");

const donatorRepository = {};

donatorRepository.getAll = async() => {
    let result = await donators.find({})
    .exec();
    return result;
};

donatorRepository.getRequestBlood = async(email) => {
    let result = await donators.find({email: email})
    .exec();
    return result;
};

donatorRepository.getByBlood = async(blood) => {
    let result = await donators.find({bloodType: blood})
    .exec();
    return result;
};

donatorRepository.login = async(email, password) => {
    let result = await donators.findOne({
        email: email,
        password: password
    }).exec();
    if(result != null){
        let generateToken = require("../polices/auth-police").generateToken;
        let token = await generateToken(result);
        console.log("result =>> ", result)
        let data = {
            _id: result["_id"],
            name: result.name,
            email: result.email,
            bloodType: result.bloodType,
            genre : result.genre,
            dateOfBirth: result.dateOfBirth,
            push: result.push,
            lastDonate: result.lastDonate,
            token: token,
            requestOfBlood: result.requestOfBlood
        };
        return data;
    }
    return null;
};

donatorRepository.update = async(id, donator) => {
    let result = await donators.update({_id: id}, {$set: donator}).exec();
    return result;
};

donatorRepository.push = async(id, donator) => {
    console.log("id, donator ==>Ç ",id, donator)
    let result = await donators.update({_id: id}, {$push: {requestOfBlood: donator}}).exec();
    return result;
};

donatorRepository.create = async(donator) => {
    let newDonator = new donators(donator);
    return await newDonator.save();
};

module.exports = donatorRepository;