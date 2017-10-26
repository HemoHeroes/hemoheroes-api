const mongoose = require('mongoose');

var UserBank = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
        // validate: /validate email/gi
    },
    cnpj: {
        type: String,
        unique: true
        // validate: /validate cnpj/gi
    },
    phones: Array,
    ramal: String,
    andress: {
        lati: Number,
        long: Number,
        street: String
    },
    passwoard: String,
    active: Boolean
},{versionKey: false});

module.exports = mongoose.model('UserBank', UserBank, 'UserBank');
