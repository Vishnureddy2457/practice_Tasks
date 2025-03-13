import { useState, useEffect } from "react";
import axios from "axios";

const Datapost = () => {
  const [payment, setPayment] = useState({ userName: "", property: "", amount: "", dueDate: "" });
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await axios.get("http://localhost:5011/api/payments");
      setPayments(response.data);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  };

  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5011/api/payments", payment);
      fetchPayments();
      setPayment({ userName: "", property: "", amount: "", dueDate: "" });
    } catch (error) {
      console.error("Error adding payment:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">UPI Payment Management</h1>

      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <input className="w-full p-2 border rounded mb-3" type="text" name="userName" placeholder="User Name" value={payment.userName} onChange={handleChange} required />
        <input className="w-full p-2 border rounded mb-3" type="text" name="property" placeholder="Property" value={payment.property} onChange={handleChange} required />
        <input className="w-full p-2 border rounded mb-3" type="number" name="amount" placeholder="Amount" value={payment.amount} onChange={handleChange} required />
        <input className="w-full p-2 border rounded mb-3" type="date" name="dueDate" value={payment.dueDate} onChange={handleChange} required />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit Payment</button>
      </form>

      <div className="mt-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-3">Payment Records</h2>
        <ul className="bg-white p-4 rounded-lg shadow-md">
          {payments.length === 0 ? <p className="text-gray-500">No payments found</p> : payments.map((pay, index) => (
            <li key={index} className="p-2 border-b last:border-none">
              <span className="font-bold">{pay.userName}</span> - {pay.property} - ₹{pay.amount} - Due: {pay.dueDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Datapost;
