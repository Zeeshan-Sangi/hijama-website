import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import dotenv from 'dotenv';
import { STRIPE_KEYS } from './config/stripe-keys.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Try to load from .env first, fallback to config file
dotenv.config({ path: resolve(__dirname, '.env') });

// Load Stripe secret key - prefer .env, fallback to config file
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || STRIPE_KEYS.SECRET_KEY;

if (!stripeSecretKey) {
  console.error('❌ ERROR: STRIPE_SECRET_KEY is missing!');
  process.exit(1);
}

console.log('✅ Stripe Secret Key loaded (from .env or config file)');

// Initialize Stripe
const stripe = new Stripe(stripeSecretKey);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - CORS with proper configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://westend-hijama-website-f35f7.web.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check if in production
const isProduction = process.env.NODE_ENV === 'production';

// API Route: Create Payment Intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'gbp' } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Amount is required and must be greater than 0' });
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in smallest currency unit (pence for GBP)
      currency: currency.toLowerCase(),
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        // Add any additional metadata you need
        integration_check: 'accept_a_payment',
      },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({
      error: error.message || 'Failed to create payment intent',
    });
  }
});

// API Route: Create Checkout Session (for redirect to Stripe)
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { 
      amount, 
      currency = 'gbp',
      packageName,
      packagePrice,
      date,
      time,
      customerName,
      customerEmail,
      successUrl,
      cancelUrl
    } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Amount is required and must be greater than 0' });
    }

    // Convert amount to smallest currency unit (pence for GBP)
    const amountInCents = typeof amount === 'string' 
      ? parseInt(amount.replace('£', '')) * 100 
      : Math.round(amount * 100);

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: `${packageName || 'Booking'} - Partial Payment`,
              description: `Booking for ${date || 'selected date'} at ${time || 'selected time'}. Remaining balance to be paid on arrival.`,
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: customerEmail,
      metadata: {
        packageName: packageName || '',
        packagePrice: packagePrice || '',
        date: date || '',
        time: time || '',
        customerName: customerName || '',
        customerPhone: req.body.customerPhone || '',
        bookingType: 'partial_payment',
      },
      success_url: successUrl || `${req.headers.origin || 'http://localhost:3000'}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${req.headers.origin || 'http://localhost:3000'}/booking?canceled=true`,
    });

    res.status(200).json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({
      error: error.message || 'Failed to create checkout session',
    });
  }
});

// API Route: Verify Checkout Session Status
app.get('/api/checkout-session/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    res.status(200).json({
      status: session.payment_status,
      customerEmail: session.customer_email,
      amountTotal: session.amount_total,
      currency: session.currency,
      metadata: session.metadata,
    });
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    res.status(500).json({
      error: error.message || 'Failed to retrieve checkout session',
    });
  }
});

// API Route: Verify Payment Status
app.get('/api/payment-status/:paymentIntentId', async (req, res) => {
  try {
    const { paymentIntentId } = req.params;

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    res.status(200).json({
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      paymentIntent,
    });
  } catch (error) {
    console.error('Error retrieving payment intent:', error);
    res.status(500).json({
      error: error.message || 'Failed to retrieve payment intent',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// In production, serve static files from dist folder
if (isProduction) {
  app.use(express.static(join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`💰 Stripe integration enabled (Test Mode)`);
  console.log(`📍 API endpoint: http://localhost:${PORT}/api/create-payment-intent`);
});

