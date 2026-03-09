import React from "react";
import { useNavigate } from "react-router-dom";
import "./upiAuthMock.css";

const UPIAuthMock = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    // Here you would normally redirect to UPI intent
    alert("Redirecting to UPI app for secure PIN entry...");
    
    // For demo, navigate to success/failure page
    navigate("/payment-status", {
      state: { status: "PENDING" }
    });
  };

  return (
    <div className="upi-auth-container">
      <h2>🔐 UPI Authentication Required</h2>

      <p className="info-text">
        For security reasons, UPI PIN entry is handled only by your UPI app
        (Google Pay, PhonePe, Paytm, BHIM, etc.).
      </p>

      {/* Decorative PIN Dots */}
      <div className="pin-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <p className="warning-text">
        ⚠️ This app never collects or stores your UPI PIN.
      </p>

      <button className="proceed-btn" onClick={handleProceed}>
        Proceed to UPI App
      </button>
    </div>
  );
};

export default UPIAuthMock;