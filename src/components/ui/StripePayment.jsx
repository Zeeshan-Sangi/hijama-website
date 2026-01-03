import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CreditCard, Lock } from 'lucide-react';

// Initialize Stripe - with fallback key
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51SOoQBFMu8bmF8wZc14ekyxDYHkHOuUfoDob7x4oAhuVU4ljnTF2uUGEXlkyuel3i6tpdAo4dEXKUG1Uz7Nl9Fyy00wtUGtxTO';
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || STRIPE_PUBLISHABLE_KEY;

const stripePromise = loadStripe(stripePublishableKey);

// Payment Form Component
const PaymentForm = ({ amount, onPaymentSuccess, onPaymentError, isProcessing, setIsProcessing, clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setIsProcessing(true);
    setCardError(null);

    try {
      // Confirm payment with Stripe
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/booking-success`,
        },
        redirect: 'if_required',
      });

      if (error) {
        // Show error to user
        setCardError(error.message || 'Payment failed');
        onPaymentError(error.message || 'Payment failed');
        setIsProcessing(false);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Payment succeeded
        onPaymentSuccess(paymentIntent);
        setIsProcessing(false);
      } else {
        // Payment is still processing
        onPaymentSuccess(paymentIntent);
        setIsProcessing(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setCardError(error.message || 'Payment failed');
      onPaymentError(error.message || 'Payment failed');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="p-4 border border-gray-300 rounded-lg bg-white">
          <div className="flex items-center space-x-3 mb-3">
            <CreditCard className="text-[#13aea1]" size={20} />
            <span className="font-semibold text-gray-800">Card Details</span>
          </div>
          
          <div className="mt-3">
            <PaymentElement 
              options={{
                layout: 'tabs',
              }}
            />
          </div>

          <div className="mt-4 p-3 border border-gray-200 rounded-lg bg-gray-50">
            <div className="text-sm text-gray-600 mb-2 font-semibold">
              🧪 Test Mode - Use these test cards:
            </div>
            <div className="text-xs text-gray-500 space-y-1">
              <div><strong>Success:</strong> 4242 4242 4242 4242</div>
              <div><strong>3D Secure:</strong> 4000 0025 0000 3155</div>
              <div><strong>Declined:</strong> 4000 0000 0000 0002</div>
              <div className="mt-2">Expiry: Any future date | CVC: Any 3 digits</div>
            </div>
          </div>
          
          {cardError && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">{cardError}</p>
            </div>
          )}
        </div>

        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <Lock className="text-green-600 mt-1" size={20} />
            <div>
              <p className="text-sm font-semibold text-green-800">Secure Payment</p>
              <p className="text-xs text-green-600">
                Your payment is processed securely through Stripe. We never store your card details.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-[#13aea1] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0e8c81] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isProcessing ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Processing Payment...
          </>
        ) : (
          `Pay £${amount.toFixed(2)}`
        )}
      </button>
    </form>
  );
};

// Main Payment Component
const StripePayment = ({ amount, onPaymentSuccess, onPaymentError, isProcessing, setIsProcessing }) => {
  const [clientSecret, setClientSecret] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Create payment intent when component mounts
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: Math.round(amount * 100), // Convert to pence
            currency: 'gbp',
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to create payment intent');
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
        onPaymentError(error.message || 'Failed to initialize payment');
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (amount > 0) {
      createPaymentIntent();
    }
  }, [amount, onPaymentError]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#13aea1]"></div>
        <span className="ml-3 text-gray-600">Loading payment form...</span>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-sm text-red-800">Failed to initialize payment. Please try again.</p>
      </div>
    );
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm 
        amount={amount}
        onPaymentSuccess={onPaymentSuccess}
        onPaymentError={onPaymentError}
        isProcessing={isProcessing}
        setIsProcessing={setIsProcessing}
        clientSecret={clientSecret}
      />
    </Elements>
  );
};

export default StripePayment;
