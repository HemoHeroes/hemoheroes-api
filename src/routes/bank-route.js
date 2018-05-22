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
        return response.status(500).send("error internal")
    }
});

router.post("/login", (request, response) => {
    try{
        let result = controller.login(request.body.email, request.body.password);
        if(!result) {
            return response.status(401).json(result);
        }
        return response.status(200).json(result);
    }catch(error){
        return response.status(500).send("error internal")
    }
});

router.post('/subscriber', (request, response) => {
    
    const subscription = request.body;
    const payload = JSON.stringify({ title: "Push Test", body: "testando novamente" });

    console.log("subscription :>> ", subscription)
    console.log("subscription :>> ", payload)

    controller.sendPush(subscription, payload);
    response.status(201).send("foi").end();
});

module.exports = router;