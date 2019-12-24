var express = require('express');
var router = express.Router();

var userController = require('../controller/userController');

router.post('/signin', userController.postUserSignin);
router.post('/signup', userController.postUserSignup);

module.exports = router;
