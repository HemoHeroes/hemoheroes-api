"use strict";

const express = require("express");
const router = express.Router();

const controller = require("../controllers/bank-controller");

router.get("/", (request, response) => {
    return response.status(200).send({
        title: "BANK - API",
        version: "2.0.0"    
    });
});

router.post("/", (request, response) => {
    
});

module.exports = router;