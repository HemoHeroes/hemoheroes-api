const mongoose = require('mongoose');

var UserDonator = mongoose.Schema({
	name: String,
	email: {
        type: String,
        unique: true
        // validate: /validate email/gi
    },
	bloodType: String,
    gender: String,
    password: String,
    auth: Object,
    active: Boolean,
    notifyActive: Boolean,
    dateLastDonator: Date
},{versionKey: false});

module.exports = mongoose.model('UserDonator', UserDonator, 'UserDonator');