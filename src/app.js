"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const version = require("config").get("server.version");

const app = express();

// Loading routes
const indexRoute = require("./routes/index-route");
const bankRoute = require("./routes/bank-route");
const donatorRoute = require("./routes/donators-route");

// Use MiddleWares of Libs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Loading MiddleWares
const genericMiddlware = require("./middlewares/generic-middleware");

// Use MiddleWares
app.use(genericMiddlware);

// Loading routes
app.use("/", indexRoute);
app.use(`/api/${version}/banks`, bankRoute);
app.use(`/api/${version}/donators`, donatorRoute)
module.exports = app;