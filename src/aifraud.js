// Simulated AI fraud detection (can be replaced with real AI later)
export const analyzeTransactionWithAI = async (qrData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const suspiciousKeywords = [
        "cashback",
        "free",
        "reward",
        "paytm",
        "offer",
        "click"
      ];

      const isFraud = suspiciousKeywords.some(keyword =>
        qrData.toLowerCase().includes(keyword)
      );

      resolve({
        isFraud,
        confidence: isFraud ? 0.92 : 0.12,
        reason: isFraud
          ? "Suspicious UPI pattern detected using AI"
          : "Transaction appears safe"
      });
    }, 800);
  });
};