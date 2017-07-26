const mongoose = require('mongoose');

var UserBank = mongoose.Schema({
    name: String,
    email: String,
    cnpj: String,
    phones: Array,
    ramal: String,
    andress: {
        lati: Number,
        long: Number,
        street: String
    },
    passwoard: String
},{versionKey: false});

module.exports = mongoose.model('UserBank', UserBank, 'UserBank');
