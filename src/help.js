import React, { useState } from "react";
import "./help.css";

const Help = () => {
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Hi 👋 I’m Aegis AI. I can guide you with payments, QR scanning, login issues, and security. How can I help?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 🧠 SMART RESPONSE ENGINE
  const getAiResponse = (question) => {
    const q = question.toLowerCase();

    // Greetings
    if (["hi", "hello", "hey"].some((w) => q.includes(w))) {
      return "Hello 😊 Tell me what you need help with — payment, QR scan, or account issues?";
    }

    // Payment guidance
    if (q.includes("payment")) {
      return (
        "Here’s how to make a payment:\n\n" +
        "1️⃣ Go to Payments page\n" +
        "2️⃣ Scan a valid UPI QR or upload QR image\n" +
        "3️⃣ If QR is real → enter amount\n" +
        "4️⃣ Confirm & complete payment securely ✅"
      );
    }

    // QR scanning
    if (q.includes("scan") || q.includes("qr")) {
      return (
        "To scan a QR properly:\n\n" +
        "📸 Use good lighting\n" +
        "📐 Keep QR fully inside the scanner box\n" +
        "🖼 If camera fails, upload the QR image\n\n" +
        "Real QR → Payment page\n" +
        "Fake QR → Warning page 🚨"
      );
    }

    // Fake QR
    if (q.includes("fake")) {
      return (
        "Fake QR detected 🚫\n\n" +
        "• Payment is blocked automatically\n" +
        "• Your account stays safe\n" +
        "• You’ll see a warning page\n\n" +
        "Never proceed with unknown QR codes."
      );
    }

    // Login issues
    if (q.includes("login") || q.includes("sign")) {
      return (
        "If login is not working:\n\n" +
        "✔ Check email & password\n" +
        "✔ Use 'Forgot password' if needed\n" +
        "✔ Complete OTP verification\n\n" +
        "After successful login, you’ll reach the dashboard."
      );
    }

    // Errors
    if (q.includes("error") || q.includes("not working")) {
      return (
        "If something isn’t working:\n\n" +
        "🔄 Refresh the page\n" +
        "📷 Allow camera permission\n" +
        "🌐 Check internet connection\n\n" +
        "Tell me what exactly failed and I’ll guide you."
      );
    }

    // Security
    if (q.includes("security") || q.includes("safe")) {
      return (
        "Your security is our priority 🔐\n\n" +
        "• Fake QR detection\n" +
        "• Secure UPI validation\n" +
        "• Account protection\n\n" +
        "You can also freeze your account from Settings."
      );
    }

    // Fallback (CONVERSATIONAL, NOT REPETITIVE)
    return (
      "I understand 👍\n\n" +
      "Please tell me:\n" +
      "• What page you’re on\n" +
      "• What you tried to do\n" +
      "• What happened instead\n\n" +
      "I’ll help you step by step."
    );
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const aiMsg = {
        from: "ai",
        text: getAiResponse(userMsg.text),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="help-container">
      <h2 className="help-title">Help Center • Aegis AI</h2>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.from === "ai" ? "ai" : "user"}`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="chat-message ai">Typing…</div>}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask your question here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Help;
