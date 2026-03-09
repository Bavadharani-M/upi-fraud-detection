export const validateQRAndRoute = async (qrText, navigate) => {
  console.log("QR RECEIVED:", qrText);

  // 1️⃣ Must be UPI
  if (!qrText.startsWith("upi://pay")) {
    navigate("/app/fake", {
      state: { reason: "Not a valid UPI QR" },
      replace: true,
    });
    return;
  }

  // 2️⃣ Extract UPI parameters
  const params = new URLSearchParams(qrText.replace("upi://pay?", ""));
  const pa = params.get("pa"); // payee address
  const pn = params.get("pn"); // payee name

  // 3️⃣ Missing critical fields → FAKE
  if (!pa || !pn) {
    navigate("/app/fake", {
      state: { reason: "Missing payee details" },
      replace: true,
    });
    return;
  }

  // 4️⃣ Suspicious keywords
  const suspiciousWords = [
    "free",
    "win",
    "claim",
    "reward",
    "lottery",
    "scam",
    "offer",
  ];

  const lowerQR = qrText.toLowerCase();
  const isSuspicious = suspiciousWords.some(word =>
    lowerQR.includes(word)
  );

  if (isSuspicious) {
    navigate("/app/fake", {
      state: { reason: "Suspicious keywords detected" },
      replace: true,
    });
    return;
  }

  // ✅ PASSED ALL CHECKS → PAYMENT
  navigate("/app/payment", {
    state: { qrData: qrText },
    replace: true,
  });
};