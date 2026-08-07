const { adminDb } = require('../config/firebase-admin');
async function saveOrderService(orderData) {
    if (adminDb) {
        await adminDb.collection("orders").doc(orderData.orderId).set(orderData);
    }
    return { success: true };
}
module.exports = { saveOrderService };