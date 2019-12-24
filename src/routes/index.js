var express = require('express');
var router = express.Router();

router.use('/list', require('./list'));
router.use('/user', require('./user'));
router.use('/vacation', require('./vacation'));

module.exports = router;
