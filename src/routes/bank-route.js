"use strict";

const express = require("express");
const router = express.Router();

const controller = require("../controllers/bank-controller");

router.get("/", (request, response) => {
    try{
        let result = controller.getAll();
        return response.status(200).json(result);
    }catch(error){
        return response.status(500).json({
            message: "Error internal"
        });
    }

    // return response.status(200).send({
    //     title: "BANK - API",
    //     version: "2.0.0"    
    // });
});

router.post("/", (request, response) => {
    
});

module.exports = router;