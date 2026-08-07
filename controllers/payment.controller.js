const { createOrderSessionService } = require('../services/payment.service');
async function createPaymentSession(req, res) {
    try {
        const session = await createOrderSessionService(req.body);
        res.json({ success: true, ...session });
    } catch (e) { res.status(500).json({ success: false, message: e.message }); }
}
async function verifyPayment(req, res) { res.json({ success: true }); }
module.exports = { createPaymentSession, verifyPayment };