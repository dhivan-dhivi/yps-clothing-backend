require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const paymentsRoutes = require('./routes/payments.routes');
const webhooksRoutes = require('./routes/webhooks.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));

// Webhook raw body parser MUST come before express.json()
app.use('/api/v1/webhooks', express.raw({ type: 'application/json' }), webhooksRoutes);

app.use(express.json());
app.use(morgan('combined'));

// Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: { success: false, message: "Too many requests from this IP." }
});
app.use('/api/', limiter);

// Mount API Routes
app.use('/api/v1/payments', paymentsRoutes);
app.use('/api/v1/orders', ordersRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Server Error Stack:", err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 YPS Backend Engine running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`);
});