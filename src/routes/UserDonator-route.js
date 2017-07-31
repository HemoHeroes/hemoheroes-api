'use strict';

const express = require('express');
const router = express.Router();
const userDonatorController = require('../controllers/UserDonator-controller');

router.get('/', userDonatorController.get);
router.get('/:id', userDonatorController.getById);
router.post('/', userDonatorController.post);
router.put('/:id', userDonatorController.put);
router.delete('/', userDonatorController.delete);

module.exports = router;
