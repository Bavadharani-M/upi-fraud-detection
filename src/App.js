import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./login";
import DashboardLayout from "./dashboardlayout";
import Dashboard from "./dashboard";
import Payment from "./payment";
import FakeQR from "./fake";
import Reports from "./report";
import Help from "./help";
import Settings from "./setting";
import Transactions from "./transaction";
import ProtectedRoute from "./protectedroute";
import TempFreeze from "./tempfreeze";
import PermanentFreeze from "./permfreeze";
import TamperDetection from "./tamperdetection"; 


import UPIAuthMock from "./upiauthmock"; // ✅ NEW (safe mock screen)

import { auth } from "./firebase";

console.log("Firebase connected:", auth);

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* PROTECTED DASHBOARD */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="tamper-check" element={<tamperdetection />} />
          <Route path="payment" element={<Payment />} />
          <Route path="upi-auth" element={<UPIAuthMock />} /> {/* ✅ NEW */}
          <Route path="fake" element={<FakeQR />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
          <Route path="temp-freeze" element={<TempFreeze />} />
          <Route path="permanent-freeze" element={<PermanentFreeze />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;