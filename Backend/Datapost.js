const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/upi_payment_db")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const paymentSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  property: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: String, required: true },
});

const Payment = mongoose.model("Payment", paymentSchema);

// Add Payment
app.post("/api/payments", async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    await newPayment.save();
    res.status(201).json({ message: "Payment added successfully", payment: newPayment });
  } catch (error) {
    res.status(500).json({ error: "Failed to add payment" });
  }
});

// Get Payments
app.get("/api/payments", async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch payments" });
  }
});

app.listen(5011, () => console.log("Server running on port 5011"));
