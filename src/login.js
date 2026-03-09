import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "./firebase";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  // login | signup | forgot | otp | reset

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  // ================= FIREBASE LOGIC =================

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/app");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password not strong enough");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/app");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent to your email");
      setMode("login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      {/* ================= LEFT SIDE ================= */}
      <div className="secure-left">
        <div className="security-core">
          <div className="shield"></div>
          <div className="lock"></div>
        </div>

        <div className="transaction-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nodes">
          <div className="node"></div>
          <div className="node"></div>
          <div className="node"></div>
          <div className="node"></div>
        </div>

        <div className="secure-text">
          <h1>Secure UPI System</h1>
          <p>Protecting people • Securing payments</p>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="login-right">
        <div className="login-box">

          <div className="login-brand">
            <p className="brand-line">
              Encrypted by design • Trusted by people
            </p>
            <p className="brand-sub">
              Built To Safeguard Every Transaction
            </p>
          </div>

          {/* ================= LOGIN ================= */}
          {mode === "login" && (
            <>
              <h2>Welcome Back</h2>

              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="forgot">
                <span onClick={() => setMode("forgot")}>
                  forgot password?
                </span>
              </div>

              <button className="btn-primary" onClick={handleLogin}>
                verify & continue
              </button>

              <p className="toggle">
                new here?
                <span onClick={() => setMode("signup")}> sign up</span>
              </p>
            </>
          )}

          {/* ================= SIGNUP ================= */}
          {mode === "signup" && (
            <>
              <h2>Create Account</h2>

              <input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button className="btn-primary" onClick={handleSignup}>
                verify & continue
              </button>

              <p className="toggle">
                already have an account?
                <span onClick={() => setMode("login")}> sign in</span>
              </p>
            </>
          )}

          {/* ================= FORGOT PASSWORD ================= */}
          {mode === "forgot" && (
            <>
              <h2>Forgot Password</h2>
              <p className="otp-text">Enter your registered email</p>

              <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className="btn-primary"
                onClick={handleForgotPassword}
              >
                send reset link
              </button>

              <p className="toggle">
                back to
                <span onClick={() => setMode("login")}> login</span>
              </p>
            </>
          )}

          {/* ================= OTP (UI ONLY) ================= */}
          {mode === "otp" && (
            <div className="otp-box">
              <h2>OTP Verification</h2>

              <div className="otp-inputs">
                {otp.map((d, i) => (
                  <input
                    key={i}
                    maxLength="1"
                    value={d}
                    onChange={(e) =>
                      handleOtpChange(e.target.value, i)
                    }
                  />
                ))}
              </div>

              <button
                className="btn-primary"
                onClick={() => setMode("reset")}
              >
                confirm otp
              </button>
            </div>
          )}

          {/* ================= RESET PASSWORD (UI ONLY) ================= */}
          {mode === "reset" && (
            <>
              <h2>Reset Password</h2>

              <input
                type="password"
                placeholder="new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                className="btn-primary"
                onClick={() => {
                  if (!passwordRegex.test(password)) {
                    alert("Password not strong enough");
                    return;
                  }
                  alert("Please check your email to reset password");
                  setMode("login");
                }}
              >
                reset password
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;