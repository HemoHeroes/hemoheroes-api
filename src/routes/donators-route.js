"use strict";

const express = require("express");
const router = express.Router();

const controller = require("../controllers/donators-controller");
const middleAuth = require("../middlewares/auth-middleware"); //authorize , isAdmin


router.get("/", middleAuth.authorize, async(request, response) => {
    let donators = await controller.getAll()
    return response.status(200).json(donators);
});

router.get("/requestBlood/:email", async(request, response) => {
    console.log("chegou aquii ", request.params)
    let donators = await controller.getRequestBlood(request.params.email);
    return response.status(200).json(donators);
});

router.post("/", async (request, response) => {
    try{
        let result = await controller.create(request.body);
        return response.status(201).json(result);
    }catch(error){
        return response.status(500).send("fudeeu")
    }
});

router.post("/change", middleAuth.authorize, async (request, response) => {
    try {
        let result = await controller.change(request.body);
        response.status(201).json(result);
    } catch(error) {
        return response.status(500).send(error)
    }
});

router.post("/login", async(request, response) => {
    try{
        let result = await controller.login(request.body.email, request.body.password);
        if(!result) {
            return response.status(401).json(result);
        }
        return response.status(200).json(result);
    }catch(error){
        console.log(error)
        return response.status(500).send("internal server error")
    }
});


module.exports = router;