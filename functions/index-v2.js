const { onRequest } = require('firebase-functions/v2/https');
const Stripe = require('stripe');

// Initialize Stripe
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_51SOoQBFMu8bmF8wZO75gr9366zOMUE1OHP9fam5W0lmrXK9kwso6LEONViZwyXrJ7jRT4FR5G3arIMhVjM6kxul800VZFPcFGr';
const stripe = new Stripe(stripeSecretKey);

// Health check
exports.health = onRequest({ cors: true }, async (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Create Payment Intent
exports.createPaymentIntent = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== 'POST') {
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

// Create Checkout Session
exports.createCheckoutSession = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== 'POST') {
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

// Verify Checkout Session Status
exports.checkoutSession = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Extract sessionId from URL path
    const pathParts = req.path.split('/').filter(p => p);
    const sessionId = pathParts[pathParts.length - 1];
    
    if (!sessionId || sessionId === 'checkout-session') {
      return res.status(400).json({ error: 'Session ID is required' });
    }

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

// Verify Payment Status
exports.paymentStatus = onRequest({ cors: true }, async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Extract paymentIntentId from URL path
    const pathParts = req.path.split('/').filter(p => p);
    const paymentIntentId = pathParts[pathParts.length - 1];
    
    if (!paymentIntentId || paymentIntentId === 'payment-status') {
      return res.status(400).json({ error: 'Payment Intent ID is required' });
    }

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

