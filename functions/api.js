const { onRequest } = require('firebase-functions/v2/https');
const Stripe = require('stripe');

// Initialize Stripe - with fallback key from config
const STRIPE_SECRET_KEY_FALLBACK = 'sk_test_51SOoQBFMu8bmF8wZO75gr9366zOMUE1OHP9fam5W0lmrXK9kwso6LEONViZwyXrJ7jRT4FR5G3arIMhVjM6kxul800VZFPcFGr';
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || STRIPE_SECRET_KEY_FALLBACK;

if (!stripeSecretKey) {
  console.error('❌ ERROR: STRIPE_SECRET_KEY is missing!');
  throw new Error('STRIPE_SECRET_KEY is required');
}

console.log('✅ Stripe Secret Key loaded (from env or fallback)');
const stripe = new Stripe(stripeSecretKey);

// Main API handler
exports.api = onRequest({ cors: true }, async (req, res) => {
  const path = req.path || req.url || '';
  const method = req.method;

  console.log(`API Request: ${method} ${path}`);

  // Health check
  if (path === '/health' || path === '/api/health') {
    return res.json({ status: 'ok', timestamp: new Date().toISOString() });
  }

  // Create Payment Intent
  if (path === '/create-payment-intent' || path === '/api/create-payment-intent') {
    if (method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      const { amount, currency = 'gbp' } = req.body;

      if (!amount || amount <= 0) {
        return res.status(400).json({ error: 'Amount is required and must be greater than 0' });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: currency.toLowerCase(),
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          integration_check: 'accept_a_payment',
        },
      });

      return res.status(200).json({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      return res.status(500).json({
        error: error.message || 'Failed to create payment intent',
      });
    }
  }

  // Create Checkout Session
  if (path === '/create-checkout-session' || path === '/api/create-checkout-session') {
    if (method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

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
        customerPhone,
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

      // Get origin from request headers
      const origin = req.headers.origin || req.headers.referer || 'https://westend-hijama-website-f35f7.web.app';

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
          customerPhone: customerPhone || '',
          bookingType: 'partial_payment',
        },
        success_url: successUrl || `${origin}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: cancelUrl || `${origin}/booking?canceled=true`,
      });

      return res.status(200).json({
        sessionId: session.id,
        url: session.url,
      });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      return res.status(500).json({
        error: error.message || 'Failed to create checkout session',
      });
    }
  }

  // Verify Checkout Session Status
  if (path.startsWith('/checkout-session/') || path.startsWith('/api/checkout-session/')) {
    if (method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      // Extract sessionId from path
      const pathParts = path.split('/').filter(p => p);
      const sessionIdIndex = pathParts.findIndex(p => p === 'checkout-session' || p === 'api');
      const sessionId = pathParts[sessionIdIndex + 1];
      
      if (!sessionId) {
        return res.status(400).json({ error: 'Session ID is required' });
      }

      const session = await stripe.checkout.sessions.retrieve(sessionId);

      return res.status(200).json({
        status: session.payment_status,
        customerEmail: session.customer_email,
        amountTotal: session.amount_total,
        currency: session.currency,
        metadata: session.metadata,
      });
    } catch (error) {
      console.error('Error retrieving checkout session:', error);
      return res.status(500).json({
        error: error.message || 'Failed to retrieve checkout session',
      });
    }
  }

  // Verify Payment Status
  if (path.startsWith('/payment-status/') || path.startsWith('/api/payment-status/')) {
    if (method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      // Extract paymentIntentId from path
      const pathParts = path.split('/').filter(p => p);
      const paymentIntentIdIndex = pathParts.findIndex(p => p === 'payment-status' || p === 'api');
      const paymentIntentId = pathParts[paymentIntentIdIndex + 1];
      
      if (!paymentIntentId) {
        return res.status(400).json({ error: 'Payment Intent ID is required' });
      }

      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

      return res.status(200).json({
        status: paymentIntent.status,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        paymentIntent,
      });
    } catch (error) {
      console.error('Error retrieving payment intent:', error);
      return res.status(500).json({
        error: error.message || 'Failed to retrieve payment intent',
      });
    }
  }

  // 404 for unknown routes
  return res.status(404).json({ error: 'Route not found' });
});

