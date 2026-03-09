import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./permfreeze.css";

const PermanentFreeze = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const qrData =
    location.state?.qrData || "Suspicious or unsupported QR code";

  return (
    <div className="pfreeze-container">
      <div className="pfreeze-card">
        <h1 className="pfreeze-title">🚫 Account Permanently Frozen</h1>

        <p className="pfreeze-desc">
          Due to a confirmed suspicious or fraudulent QR transaction attempt,
          your account has been permanently frozen to protect your funds.
        </p>

        <div className="pfreeze-info">
          <h3>Account Status</h3>
          <ul>
            <li>❌ All payments are permanently disabled</li>
            <li>❌ QR scanning is blocked</li>
            <li>❌ Account cannot be reactivated automatically</li>
            <li>📞 Manual verification is required</li>
          </ul>
        </div>

        <div className="pfreeze-qr">
          <span>Suspicious QR Data</span>
          <p>{qrData}</p>
        </div>

        <div className="pfreeze-actions">
          <button onClick={() => navigate("/app/help")}>
            Contact Bank Support
          </button>

          <button onClick={() => navigate("/")}>
            Logout
          </button>
        </div>

        <p className="pfreeze-note">
          This action is irreversible without official bank approval.
        </p>
      </div>
    </div>
  );
};

export default PermanentFreeze;