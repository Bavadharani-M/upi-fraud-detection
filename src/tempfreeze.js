import React from "react";
import { useNavigate } from "react-router-dom";
import "./tempfreeze.css";

const TempFreeze = () => {
  const navigate = useNavigate();

  return (
    <div className="freeze-container">
      <div className="freeze-card">
        <h1 className="freeze-title">🔒 Account Temporarily Frozen</h1>

        <p className="freeze-desc">
          Your account has been temporarily frozen due to a suspicious QR
          transaction attempt. This is a safety measure to protect your funds.
        </p>

        <div className="freeze-info">
          <h3>What does this mean?</h3>
          <ul>
            <li>❌ Payments are temporarily disabled </li>
            <li>❌ QR scanning is blocked for privacy security</li>
            <li>✅ You can still view transactions of your account</li>
            <li>✅ You can contact support for verification</li>
          </ul>
        </div>

        <div className="freeze-actions">
          <button onClick={() => navigate("/app/help")}>
            Contact Support
          </button>

          <button onClick={() => navigate("/app")}>
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default TempFreeze;