"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        name : String,
        email : String,
        cnpj : String,
        phones : [Object],
        address : [Object],
        password : String
    },
    {
        versionKey:false
    }
);

const userBank = mongoose.model("userBank", schema, "userBank");

const bankRepository = {};

bankRepository.getAll = async() => {
    let result = await userBank.find({})
    .exec();
    return result;
};

bankRepository.create = async(bank) => {
    let newBank = new userBank(bank);
    return await newBank.save();
};

module.exports = bankRepository;