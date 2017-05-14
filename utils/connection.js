'use strict';
const mongoose = require('mongoose');
const db = mongoose.connection;

var connLocal = 'mongodb://localhost:27017/hemoheroes';

mongoose.connect(connLocal);

db.on('error', console.error);
db.once('open', function() {
	console.log("Conectou ao MongoDB!");
});

module.exports = mongoose;
