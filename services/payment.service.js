const axios = require('axios');
const { cashfree } = require('../config/env');

async function createOrderSessionService(orderData) {
    const baseUrl = cashfree.environment === 'production' ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';
    try {
        const response = await axios.post(`${baseUrl}/orders`, {
            order_id: orderData.orderId,
            order_amount: orderData.totalAmount,
            order_currency: "INR",
            customer_details: { customer_id: "CUST_1", customer_phone: orderData.customer.phone, customer_name: orderData.customer.name }
        }, {
            headers: {
                'x-client-id': cashfree.clientId,
                'x-client-secret': cashfree.clientSecret,
                'x-api-version': '2023-08-01'
            }
        });
        return response.data;
    } catch (err) {
        throw new Error("Cashfree session failed.");
    }
}
module.exports = { createOrderSessionService };