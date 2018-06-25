"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        name : String,
        email : String,
        cnpj : String,
        phones : Array,
        address : Array,
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

bankRepository.getByEmail = async(email) => {
    let result = await userBank.find({email: email})
    .exec();
    return result;
};

bankRepository.login = async(email, password) => {
    let result = await userBank.find({
        email: email,
        password: password
    });
    console.log("chegou repository ", result)
    if (result.length > 0) {
        let generateToken = require("./../polices/auth-police").generateToken;
        let token = await generateToken(result[0]);
        let data = {
            _id: result[0]["_id"],
            name: result[0].name,
            email: result[0].email,
            phones: result[0].phones,
            token: token
        };
        return data;
        console.log("chegou repository ", data)
    }
};

bankRepository.create = async(bank) => {
    let newBank = new userBank(bank);
    return await newBank.save();
};

bankRepository.update = async(id, bank) => {
    let result = await userBank.update({_id: id}, {$set: bank}).exec();
    return result;
};

module.exports = bankRepository;