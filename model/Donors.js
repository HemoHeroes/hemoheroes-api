'use strict';
const mongoose = require('mongoose');

var donorsSchema = mongoose.Schema({
	name: String,
	email: String,
	bloodType: String,
	gender: String
},{versionKey: false});

var modelDonors = mongoose.model('donors', donorsSchema, 'donors');

module.exports = modelDonors;
