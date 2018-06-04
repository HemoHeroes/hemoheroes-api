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

router.post('/notifications', (request, response) => {
    
    const subscription = request.body;
    const payload = JSON.stringify(subscription.push);
    console.log(" subscription =>> ", subscription.bloods)
    controller.sendPush(payload, subscription.bloods);

    response.status(201).send("foi").end();

});

module.exports = router;


// {
// 	"endpoint": "https://fcm.googleapis.com/fcm/send/ddiEtsJcIaU:APA91bEvLOQkeTTIWjQaiU1ZhFpn3gsVpeu7863GZv6yaUyj-hg-2-ZviUUDoDvtNhoMO_p5eXMCJnVvxXznOJke-Xhu63NpCCdKi7GlMAGK21ON6vfTPMqEMozWNqjS3BLUqhWzQdqs",
// 	"expirationTime": "null",
// 	"keys": {
// 		"p256dh": "BC9xWOlQtOSRWH_zb5O6j_bzLgtAqTTdlFI2_Ze0JdZLG8UWpcuko3hLCkbVOGUjMzoVjl0sN52mkXyy_VyL0h4",
// 		"auth": "RNRfb4mkUndIoVgi5MX-7g"
// 	},
// 	"data": {

// 	}
// } 

// {
// 	"endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABbEitBFWp_O8Yd0OYANuI58RwPS7qgnnBNYTN5K6PklqJymm2ctwvjnQ4Fjpp6Bxr4Jf6b-SopqQMo7qX4l0jvBJE8N2s30PnsYjJ7bqrh6VeKedSawwT95w9VGKheQ1IXlcL3mKQdRMDbU_KORp_RkZRuGSM5-TmZL7wzMHVqJ_064WQ",
// 	"keys": {
// 		"auth": "ZlPUGnGL9ZxRBnZgcTA0vQ",
// 		"p256dh": "BNXxgxMNcwWo1CdDbfG23TaXhynyCuPSYflWG3FjCXwkB62jzgZnrM5EL1pBNjkiPblXuvzRd9Z4CwyzTkT-jZs"
// 	}
// }