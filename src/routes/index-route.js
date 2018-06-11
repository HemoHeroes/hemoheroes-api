"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).send({
        title: "HemoHeroes - API",
        version: "2.0.0"    
    });
});

router.post("/api/v1/notifications", async (request, response) => {
    let subscriber = require("./../services/subscriber-service");
    let data = Object.assign(request.body, {client: request.headers.user})
    let result = await subscriber.create(data);
    response.status(201).json(data);
});

module.exports = router;