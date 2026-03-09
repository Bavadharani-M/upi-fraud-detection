import React from "react";

const Account = () => {
  return (
    <div className="settings-page">
      <h2>Account Information</h2>

      <p><strong>Name:</strong> User</p>
      <p><strong>Email:</strong> user@email.com</p>
      <p><strong>Account Type:</strong> Verified</p>

      <div style={{ marginTop: "16px" }}>
        <button className="primary-btn">Edit Profile</button>
        <button className="danger-btn" style={{ marginLeft: "10px" }}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Account;
