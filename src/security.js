import React, { useState } from "react";

const Security = () => {
  const [twoFA, setTwoFA] = useState(true);

  return (
    <div className="settings-page">
      <h2>Security Settings</h2>

      <p><strong>Last Login:</strong> Today, 10:45 AM</p>

      <label>
        <input
          type="checkbox"
          checked={twoFA}
          onChange={() => setTwoFA(!twoFA)}
        />
        Enable Two-Factor Authentication
      </label>

      <div style={{ marginTop: "16px" }}>
        <button className="secondary-btn">Change Password</button>
        <button className="danger-btn" style={{ marginLeft: "10px" }}>
          Logout from All Devices
        </button>
      </div>
    </div>
  );
};

export default Security;
