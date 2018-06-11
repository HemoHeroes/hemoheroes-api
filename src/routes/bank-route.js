"use strict";

const express = require("express");
const router = express.Router();

const controller = require("../controllers/bank-controller");
const bankMiddlware = require("../middlewares/bank-middleware");
const middleAuth = require("../middlewares/auth-middleware"); 


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

router.post("/change", middleAuth.authorize, async (request, response) => {
    try {
        let result = await controller.change(request.body);
        response.status(201).json(result);
    } catch(error) {
        console.log("qual erro : => ", error)
        return response.status(500).send(error)
    }
});


router.post("/login", async (request, response) => {
    try{
        console.log("request.body => ", request.body)
        let result = await controller.login(request.body.email, request.body.password);
        if(!result) {
            return response.status(404).json(result);
        }
        return response.status(200).json(result);
    }catch(error){
        return response.status(500).send("error internal")
    }
});

router.post('/notifications', (request, response) => {
    
    const subscription = request.body;
    const payload = JSON.stringify(subscription.push);
    console.log(" subscription =>> ", subscription.bloods)
    controller.sendPush(payload, subscription.bloods);

    response.status(201).send("foi").end();

});

module.exports = router;
