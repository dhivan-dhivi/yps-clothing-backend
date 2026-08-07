require('dotenv').config();
module.exports = {
    port: process.env.PORT || 5000,
    cashfree: {
        clientId: process.env.CASHFREE_CLIENT_ID,
        clientSecret: process.env.CASHFREE_CLIENT_SECRET,
        environment: process.env.CASHFREE_ENVIRONMENT || 'sandbox'
    }
};