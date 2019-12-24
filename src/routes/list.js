var express = require('express');
var router = express.Router();

const listController = require('../controller/listController')

router.delete('/:vacationIdx/cancel', listController.deleteList);
router.get('/:vacationIdx', listController.getListDetail);
router.get('/', listController.getList);

module.exports = router;
