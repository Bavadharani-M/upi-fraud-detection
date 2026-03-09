import React from "react";

const Rewards = () => {
  return (
    <div className="settings-page">
      <h2>Rewards & Cashback</h2>

      <p><strong>Total Reward Points:</strong> 1,250</p>
      <p><strong>Available Cashback:</strong> ₹320</p>

      <button className="primary-btn">Redeem Rewards</button>

      <ul style={{ marginTop: "16px" }}>
        <li>✔ 5% cashback on verified payments</li>
        <li>✔ Bonus points for reporting fake QR</li>
        <li>✔ Monthly reward challenges</li>
      </ul>
    </div>
  );
};

export default Rewards;
