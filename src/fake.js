import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./fake.css";
import { logTransaction } from "./transactionlogger";

const FakeQRPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const qrData =
    location.state?.qrData || "Suspicious or unsupported QR code";

  // 🔒 TEMPORARY FREEZE
  const handleTemporaryFreeze = () => {
    logTransaction({
      role: "sender",
      type: "ACCOUNT",
      status: "TEMPORARILY FROZEN",
      description: "Account temporarily frozen due to suspicious QR",
    });

    navigate("/app/temp-freeze", {
      state: { qrData },
      replace: true,
    });
  };

  // 🚫 PERMANENT FREEZE
  const handlePermanentFreeze = () => {
    logTransaction({
      role: "sender",
      type: "ACCOUNT",
      status: "PERMANENTLY FROZEN",
      description: "Account permanently frozen due to fraud detection",
    });

    navigate("/app/permanent-freeze", {
      state: { qrData },
      replace: true,
    });
  };

  return (
    <div className="fake-container">
      <div className="fake-card">
        <div className="fake-icon">⚠️</div>

        <h1 className="fake-title">Fake / Suspicious QR Detected</h1>

        <p className="fake-desc">
          This QR code could not be verified as a valid payment QR.
          To protect your account, the transaction has been stopped.
        </p>

        <div className="qr-box">
          <span>Scanned QR Data</span>
          <p>{qrData}</p>
        </div>

        <div className="action-buttons">
          <button className="btn temp-block" onClick={handleTemporaryFreeze}>
            Temporarily Freeze
          </button>

          <button className="btn freeze" onClick={handlePermanentFreeze}>
            Permanently Freeze
          </button>
        </div>

        <button className="back-btn" onClick={() => navigate("/app")}>
          ← Go Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default FakeQRPage;