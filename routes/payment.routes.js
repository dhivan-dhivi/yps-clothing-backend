const router = require('express').Router();
const { createPaymentSession, verifyPayment } = require('../controllers/payment.controller');
router.post('/create-session', createPaymentSession);
router.get('/verify/:orderId', verifyPayment);
module.exports = router;