"use strict";

const express = require("express");
const router = express.Router();

const controller = require("../controllers/bank-controller");
const bankMiddlware = require("../middlewares/bank-middleware");


router.get("/", async(request, response) => {
    let banks =  await controller.getAll()
    return response.status(200).json(banks);
});

router.post("/", bankMiddlware.create, (request, response) => {
    try{
        let result = controller.create(request.body);
        return response.status(201).json(result);
    }catch(error){
        return response.status(500).send("fudeeu")
    }
});

module.exports = router;