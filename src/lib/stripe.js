import { loadStripe } from '@stripe/stripe-js';

// Stripe Publishable Key - loaded from env or config
// Fallback key from config if .env doesn't have it
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51SOoQBFMu8bmF8wZc14ekyxDYHkHOuUfoDob7x4oAhuVU4ljnTF2uUGEXlkyuel3i6tpdAo4dEXKUG1Uz7Nl9Fyy00wtUGtxTO';

const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  console.error('❌ ERROR: Stripe Publishable Key is missing!');
}

const stripePromise = loadStripe(stripePublishableKey);

export const getStripe = () => stripePromise;

// Function to create payment intent
export const createPaymentIntent = async (amount, currency = 'gbp') => {
  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // Convert to pence
        currency: currency,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment intent');
    }

    const { clientSecret } = await response.json();
    return clientSecret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

// Function to process payment
export const processPayment = async (stripe, elements, clientSecret) => {
  try {
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/booking-success`,
      },
    });

    if (error) {
      throw error;
    }

    return paymentIntent;
  } catch (error) {
    console.error('Payment processing error:', error);
    throw error;
  }
};

// Function to extract amount from price string (e.g., "£20" -> 20)
export const extractAmount = (priceString) => {
  const match = priceString.match(/£(\d+)/);
  return match ? parseInt(match[1]) : 0;
};
