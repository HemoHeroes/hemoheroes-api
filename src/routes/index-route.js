"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).send({
        title: "HemoHeroes - API",
        version: "2.0.0"    
    });
});

module.exports = router;