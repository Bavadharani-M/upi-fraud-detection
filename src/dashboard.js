import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import { validateQRAndRoute } from "./validator"; // ✅ IMPORTANT
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const scannerRef = useRef(null);
  const scannedRef = useRef(false);

  useEffect(() => {
    scannerRef.current = new Html5Qrcode("qr-reader");

    return () => {
      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, []);

  // ✅ SINGLE ENTRY POINT AFTER SCAN
  const onScanSuccess = async (decodedText) => {
    if (scannedRef.current) return;
    scannedRef.current = true;

    try {
      await scannerRef.current.stop();
    } catch (e) {}

    if (!decodedText) {
      navigate("/app/fake", {
        state: { reason: "Unreadable or tampered QR" },
        replace: true,
      });
      return;
    }

    // 🔑 ALWAYS SEND TO VALIDATOR
    await validateQRAndRoute(decodedText, navigate);
  };

  const startCameraScan = async () => {
    scannedRef.current = false;

    await scannerRef.current.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      onScanSuccess,
      () => {}
    );
  };

  const scanFromFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    scannedRef.current = false;

    try {
      const decodedText = await scannerRef.current.scanFile(file, true);
      onScanSuccess(decodedText);
    } catch {
      // 🚨 UNREADABLE QR = FAKE
      navigate("/app/fake", {
        state: { reason: "Unreadable or tampered QR" },
        replace: true,
      });
    }

    e.target.value = "";
  };

  return (
    <div className="main">
      <h1 className="heading">Secure and Verified Payment</h1>
      <p className="sub-text">Scan or upload a QR to continue</p>

      <div className="scanner-wrapper">
        <div id="qr-reader" className="scanner-box"></div>

        <div className="scanner-controls">
          <button className="scan-btn" onClick={startCameraScan}>
            Start Scanning
          </button>

          <label className="upload-btn">
            Upload QR
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={scanFromFile}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;