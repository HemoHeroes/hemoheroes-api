"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const version = require("config").get("server.version");

const app = express();

// Loading routes
const indexRoute = require("./routes/index-route");

// Use MiddleWares of Libs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Loading MiddleWares
const genericMiddlware = require("./middlewares/generic-middleware");

// Use MiddleWares
app.use(genericMiddlware);

// Loading routes
app.use("/", indexRoute);
app.use(`/api/${version}/bank`, indexRoute);

module.exports = app;