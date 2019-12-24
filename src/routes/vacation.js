var express = require('express');
var router = express.Router();

const vacationController = require('../controller/vacationController');

router.post('/', vacationController.postVacation);
router.get('/', vacationController.getVacation);

module.exports = router;
