"use client";
import React, { useState, useRef } from "react";
import styles from "./LoginSignupPopup.module.css"; // Import CSS Module
import Image from "next/image";
import { useRouter } from "next/navigation";

const OTPBox = ({ onSubmit }) => {
  const [otp, setOtp] = useState(Array(6).fill("")); // 6-digit OTP
  const inputs = useRef([]); // Refs for OTP input fields

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
    if (value.length > 1) return; // Limit to one character per input

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to the next input
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // Handle backspace key
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  const handleSubmit = () => {
    const otpCode = otp.join("");
    onSubmit(otpCode); // Pass the OTP to the parent component
  };

  const handleResendOtp = () => {};

  return (
    <div className={styles.otpBox}>
      <h5 style={{ marginBottom: "20px" }}>Enter OTP</h5>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {otp.map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputs.current[index] = el)}
            className={styles.inputotp}
          />
        ))}
      </div>
      <div className="d-flex flex-row mb-1 gap-2">
        <button onClick={handleSubmit} className={styles.submitotp}>
          Submit
        </button>
        <button onClick={handleResendOtp} className={styles.submitotp}>
          Resend Otp
        </button>
      </div>
    </div>
  );
};

const LoginSignupPopup = ({ onClose }) => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [otp, setOtp] = useState("");
  const [confirmOtp, setConfirmOtp] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmOtp(true);
  };
  const handleOTPSubmit = (otp) => {
    console.log("OTP Submitted:", otp);
    router.refresh("/");
    // Add your OTP verification logic here
  };

  return (
    <>
      <div className={styles.popupOverlay}>
        <div className={styles.popupContent}>
          <Image
            src="/images/logo-dark.png"
            alt="CouponZ"
            className="main-logo"
            width={180}
            height={180}
          />
          <button className={styles.closeBtn} onClick={onClose}>
            ×
          </button>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  setPhoneNumber(value);
                }}
                placeholder="Enter your phone number"
                pattern="[0-9]*"
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className={styles.toggleLink}
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </div>
      {confirmOtp === true ? (
        <div className={styles.popupOverlay}>
          <OTPBox onSubmit={handleOTPSubmit} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoginSignupPopup;
