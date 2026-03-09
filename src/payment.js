import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./payment.css";
import { saveTransaction } from "./transactionservice"; // ✅ ADDED
import { logTransaction } from "./transactionlogger";

const Payment = () => {
  const location = useLocation();
  const state = location.state || {};

  const [amount, setAmount] = useState("");

  const handlePay = async () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    alert("Payment processing...");

    try {
      // ✅ BACKEND UPDATE (no feature change)
      await saveTransaction({
        amount,
        qrData: state.qrData || "Unknown QR"
      });

      alert("Payment successful!");
    } catch (error) {
      console.error("Transaction save failed:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="payment-page">
      {/* NEON BACKGROUND BUBBLES */}
      <div className="bubble b1"></div>
      <div className="bubble b2"></div>
      <div className="bubble b3"></div>
      <div className="bubble b4"></div>

      {/* PAYMENT CARD */}
      <div className="payment-card">
        <h2 className="pay-title">Payment</h2>
        <p className="pay-sub">QR verified successfully</p>

        <p className="pay-sub">
          QR Data: {state.qrData || "No QR data available"}
        </p>

        <input
          type="number"
          className="amount-input"
          placeholder="₹ Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="pay-btn" onClick={handlePay}>
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;