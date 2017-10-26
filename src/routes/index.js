const router = require('express').Router();
let userController = require('./../controller/user-donator');

router.get('/user', userController.getUser);
router.get('/user/:id', userController.getUser);
router.post('/user', userController.createUser);
router.put('/user/:id', userController.changeUser);

module.exports = router;