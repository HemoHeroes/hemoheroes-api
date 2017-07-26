const mongoose = require('mongoose');

var NotificationDonator = mongoose.Schema({
    donator: [UserDonators],
    bank: [UserBank],
    dateSend: Date
},{versionKey: false});

module.exports = mongoose.model('NotificationDonator', NotificationDonator, 'NotificationDonator');
