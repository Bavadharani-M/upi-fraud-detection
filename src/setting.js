import React, { useState } from "react";
import "./dashboard.css";

const Settings = () => {
  const [active, setActive] = useState(null);

  return (
    <div>
      <h1 className="heading">Settings</h1>
      <p className="sub-text">Manage your account & preferences</p>

      {/* ================= SETTINGS BOXES ================= */}
      {!active && (
        <div className="settings-grid">
          <div className="settings-box" onClick={() => setActive("profile")}>
            👤
            <h3>Profile Details</h3>
            <p>Edit personal information</p>
          </div>

          <div className="settings-box" onClick={() => setActive("password")}>
            🔐
            <h3>Change Password</h3>
            <p>Update your login password</p>
          </div>

          <div className="settings-box" onClick={() => setActive("freeze")}>
            🚫
            <h3>Freeze Account</h3>
            <p>Temporarily block transactions</p>
          </div>

          <div className="settings-box" onClick={() => setActive("notify")}>
            🔔
            <h3>Notifications</h3>
            <p>Manage alerts & preferences</p>
          </div>
        </div>
      )}

      {/* ================= PROFILE ================= */}
      {active === "profile" && (
        <div className="settings-card">
          <h3>👤 Profile Details</h3>

          <input className="settings-input" placeholder="Full Name" />
          <input className="settings-input" placeholder="Email" />
          <input className="settings-input" placeholder="Phone Number" />

          <button className="settings-btn">Save</button>
          <button className="back-btn" onClick={() => setActive(null)}>
            ← Back
          </button>
        </div>
      )}

      {/* ================= PASSWORD ================= */}
      {active === "password" && (
        <div className="settings-card">
          <h3>🔐 Change Password</h3>

          <input
            type="password"
            className="settings-input"
            placeholder="Current Password"
          />
          <input
            type="password"
            className="settings-input"
            placeholder="New Password"
          />
          <input
            type="password"
            className="settings-input"
            placeholder="Confirm Password"
          />

          <button className="settings-btn">Update Password</button>
          <button className="back-btn" onClick={() => setActive(null)}>
            ← Back
          </button>
        </div>
      )}

      {/* ================= FREEZE ================= */}
      {active === "freeze" && (
        <div className="settings-card">
          <h3>🚫 Freeze Account</h3>
          <p>
            Freezing your account will temporarily block all outgoing
            transactions.
          </p>

          <button className="settings-btn danger">Freeze Account</button>
          <button className="back-btn" onClick={() => setActive(null)}>
            ← Back
          </button>
        </div>
      )}

      {/* ================= NOTIFICATIONS ================= */}
      {active === "notify" && (
        <div className="settings-card">
          <h3>🔔 Notification Settings</h3>

          <label className="toggle">
            <input type="checkbox" defaultChecked /> Email Notifications
          </label>

          <label className="toggle">
            <input type="checkbox" defaultChecked /> App Notifications
          </label>

          <label className="toggle">
            <input type="checkbox" /> SMS Alerts
          </label>

          <button className="back-btn" onClick={() => setActive(null)}>
            ← Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Settings;
