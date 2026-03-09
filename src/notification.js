import React, { useState } from "react";

const Notifications = () => {
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [fraud, setFraud] = useState(true);

  return (
    <div className="settings-page">
      <h2>Notifications</h2>

      <label>
        <input
          type="checkbox"
          checked={email}
          onChange={() => setEmail(!email)}
        />
        Email Alerts
      </label>

      <label>
        <input
          type="checkbox"
          checked={sms}
          onChange={() => setSms(!sms)}
        />
        SMS Alerts
      </label>

      <label>
        <input
          type="checkbox"
          checked={fraud}
          onChange={() => setFraud(!fraud)}
        />
        Fraud Detection Alerts
      </label>
    </div>
  );
};

export default Notifications;
