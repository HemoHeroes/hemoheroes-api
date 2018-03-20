"use strict";

const app = require("../src/app");
const debug = require("debug")("nodestr:server");
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const port = process.env.PORT || 8080;
// app.set("ip", config.get("server.ip"));
app.set("port", process.env.PORT || 8080);

mongoose.connect(config.get("mongodb.queryString"));

app.listen(port, ()=>{
    console.log(`Server stater in PORT=${port} PID=${process.pid}`);
});

