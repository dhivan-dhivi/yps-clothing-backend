const { saveOrderService } = require('../services/order.service');
async function saveOrderController(req, res) {
    try {
        await saveOrderService(req.body);
        res.json({ success: true, message: "Order stored safely." });
    } catch (e) { res.status(500).json({ success: false, message: e.message }); }
}
module.exports = { saveOrderController };