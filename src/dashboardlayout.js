import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import "./dashboard.css";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // ✅ BACKEND CONNECTION (NO UI CHANGE)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/");
        return;
      }

      // create user document if not exists
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          email: user.email,
          createdAt: new Date(),
          balance: 0,
          riskScore: 0,
        },
        { merge: true }
      );
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="container">
      {/* ===== SIDEBAR ===== */}
      <aside className="sidebar">
        <h2 className="logo">Aegis Pay</h2>

        <ul className="menu">
          <li
            className={`menu-item ${isActive("/app") ? "active" : ""}`}
            onClick={() => navigate("/app")}
          >
            💳 Payments
          </li>

          <li
            className={`menu-item ${
              isActive("/app/transactions") ? "active" : ""
            }`}
            onClick={() => navigate("/app/transactions")}
          >
            📜 Transactions
          </li>

          <li
            className={`menu-item ${
              isActive("/app/reports") ? "active" : ""
            }`}
            onClick={() => navigate("/app/reports")}
          >
            📊 Reports
          </li>

          <li
            className={`menu-item ${
              isActive("/app/settings") ? "active" : ""
            }`}
            onClick={() => navigate("/app/settings")}
          >
            ⚙️ Settings
          </li>

          <li
            className={`menu-item ${
              isActive("/app/help") ? "active" : ""
            }`}
            onClick={() => navigate("/app/help")}
          >
            ❓ Help & Support
          </li>
        </ul>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;