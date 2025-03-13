import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';

const Paymentment = () => {
  const [amount, setAmount] = useState('100'); // Default amount

  const createOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-paypal-order', {
        amount: amount,
      });
      return response.data.orderID;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to create PayPal order');
    }
  };

  const onApprove = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/capture-paypal-order', {
        orderID: data.orderID,
      });
      console.log('Payment successful:', response.data.details);
      alert('Payment successful!');
    } catch (err) {
      console.error(err);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <PayPalScriptProvider
      options={{
        'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
        currency: 'USD',
      }}
    >
      <div>
        <h2>PayPal Payment</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          style={{ layout: 'vertical' }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default Paymentment;