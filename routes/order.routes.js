const router = require('express').Router();
const { saveOrderController } = require('../controllers/order.controller');
router.post('/', saveOrderController);
module.exports = router;