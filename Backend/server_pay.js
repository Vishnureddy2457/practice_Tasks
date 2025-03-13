// backend/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const paypal = require('@paypal/checkout-server-sdk');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// PayPal environment setup
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);
const client = new paypal.core.PayPalHttpClient(environment);

// Create PayPal order
app.post('/create-paypal-order', async (req, res) => {
  const { amount } = req.body;

  const request = new paypal.orders.OrdersCreateRequest();
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: amount, // Amount in USD
        },
      },
    ],
  });

  try {
    const response = await client.execute(request);
    res.status(200).json({ orderID: response.result.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create PayPal order' });
  }
});

// Capture PayPal order
app.post('/capture-paypal-order', async (req, res) => {
  const { orderID } = req.body;

  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});

  try {
    const response = await client.execute(request);
    res.status(200).json({ details: response.result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to capture PayPal order' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));