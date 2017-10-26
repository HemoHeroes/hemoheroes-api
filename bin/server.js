"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const routes = require("./../src/routes");
const mongoose = require('mongoose');

mongoose.connect('mongodb://172.16.0.114:27017/hh-tst');
mongoose.connection.once('connected', () => console.log("Connectou!"));


app.set('trust proxy', true);
app.set('view cache', false);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    (req, res, next) => {
        res.setHeader("Cache-Control", "public, max-age=60");
        res.append("Access-Control-Allow-Origin", "*");
        res.append("Access-Control-Allow-Methods", ["GET", "POST", "PUT", "OPTIONS"]);
        res.append("Access-Control-Allow-Headers", 
                   "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers");
        next();
    }
);

app.use('/', routes);

module.exports = app;