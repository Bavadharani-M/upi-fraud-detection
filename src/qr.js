import React from "react";
import { useNavigate } from "react-router-dom";
import { validateQRAndRoute } from "./validator";

const QRHandler = () => {
  const navigate = useNavigate();
   const safeNavigate = (path) => {
    if (path === "/app/payment") {
      // Before payment, go to tamper detection
      navigate("/app/tamper-check");
    } else {
      navigate(path);
    }
  };

  // This function must be called when QR scan succeeds
  const handleQRResult = async (qrData) => {
    if (!qrData) return;

    // 🔑 THIS is where fake detection happens
    await validateQRAndRoute(qrData, navigate);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>QR Scan Handler</h2>

      {/* SIMULATION BUTTON (for demo/testing) */}
      <button
        onClick={() =>
          handleQRResult(
            "upi://pay?pa=scammer@upi&pn=FREE CASHBACK&am=999"
          )
        }
        style={{ marginRight: "10px" }}
      >
        Test Fake QR
      </button>

      <button
        onClick={() =>
          handleQRResult(
            "upi://pay?pa=merchant@okicici&pn=ABC Store&am=250"
          )
        }
      >
        Test Safe QR
      </button>
    </div>
  );
};

export default QRHandler;