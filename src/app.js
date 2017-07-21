'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const router = express.Router();

// Connecta no banco
mongoose.connect(config.connectionString);

// Carrega os models


// Carrega as Rotas


app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({extended: false}));

//Habilita o cors
app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

module.exports = app;