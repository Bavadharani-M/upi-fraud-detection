import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const TamperDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const [status, setStatus] = useState("Checking scanner...");

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;

      setInterval(checkTamper, 2000);
    } catch (error) {
      console.error("Camera error:", error);
    }
  };

  const checkTamper = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    let brightness = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      brightness += (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
    }

    brightness = brightness / (pixels.length / 4);

    if (brightness < 40) {
      triggerTamperAlert();
    } else {
      setStatus("Scanner OK");
      navigate("/payment");
    }
  };

  const triggerTamperAlert = () => {
    setStatus("⚠ Scanner Tampered!");

    const alarm = new Audio("/alarm.mp3");
    alarm.play();

    navigate("/fake");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Scanner Tamper Detection</h2>

      <video
        ref={videoRef}
        autoPlay
        style={{ width: "400px", border: "2px solid black" }}
      />

      <canvas ref={canvasRef} style={{ display: "none" }} />

      <h3>{status}</h3>
    </div>
  );
};

export default TamperDetection;