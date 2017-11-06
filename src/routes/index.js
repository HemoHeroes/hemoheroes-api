const router = require('express').Router();
let userDonator = require('./../controller/user-donator');
let userBank = require('./../controller/user-bank');

/**
 * User Donator
 */
router.get('/user/donator', userDonator.getUser);
router.get('/user/donator/:id', userDonator.getUser);
router.post('/user/donator', userDonator.createUser);
router.put('/user/donator/:id', userDonator.changeUser);

/**
 * User Bank
 */
router.get('/user/bank', userBank.getUser);
router.get('/user/bank/:id', userBank.getUser);
router.post('/user/bank', userBank.createUser);
router.put('/user/bank/:id', userBank.changeUser);

module.exports = router;