"use strict";

const app = require("../src/app");
const http = require("http");
const debug = require("debug")("nodestr:server");
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const port = config.get("server.port");
app.set("ip", config.get("server.ip"));
app.set("port", port);

mongoose.connect(config.get("mongodb.queryString"));

const server = http.createServer(app);

function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string" ?
        "Pipe " + port :
        "Port " + port;

    switch (error.code) {
        case "EACCES":
            console.log(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.log(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
  debug("Listening on " + bind);
};

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

console.log(`Server stater in PORT=${port} PID=${process.pid}`);