// StripeCheckout.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// Load the publishable key from Stripe
const stripePromise = loadStripe('pk_test_51Q48L6FsCPsGqMYH8Sl4fMU0TMgjyg0bZtO7sxw8AUSECUJCy4HltCpsSq3GaoXGoA9tJNgPmPiQFdFoJZw5M3Ax00qkt2TMxp'); // Replace with your actual publishable key

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setPaymentProcessing(true);

    // Get PaymentIntent client secret from your backend
    const response = await fetch('http://localhost:3001/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000 }), // Amount in cents (e.g., $10.00)
    });
    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'John Doe',
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      setError(null);
      alert('Payment successful!');
    }

    setPaymentProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={!stripe || paymentProcessing}>
        {paymentProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeCheckout;
