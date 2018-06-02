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
        notification: Object
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

donatorRepository.login = async(email, password) => {
    let result = await donators.findOne({
        email: email,
        password: password
    }).exec();
    if(result != null){
        let generateToken = require("../polices/auth-police").generateToken;
        let token = generateToken(result);
        return {token: token};
    }
    return null;
};

donatorRepository.update = async(id, donator) => {
    let result = await donators.update({_id: id}, {$set: donator}).exec();
    return result;
};

donatorRepository.create = async(donator) => {
    let newDonator = new donators(donator);
    return await newDonator.save();
};

module.exports = donatorRepository;