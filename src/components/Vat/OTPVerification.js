import React from "react";
import "./OTPVerification.css";

const OTPVerification = () => {
  return (
    <div className="otp-verification-outer-layer">
      <div className="otp-verification-container">
        {/* Breadcrumb moved outside the card */}
        <div className="otp-breadcrumb">
          <span>
            <a href="/" className="home-link">
              Home
            </a>{" "}
            &gt; Registration &gt; Verify
          </span>
          <span className="language-switch">English</span>
        </div>

        <div className="otp-verification-card">
          <div className="otp-progress-container">
            <div className="otp-step completed">
              <span className="otp-step-number">1</span>
              <span className="otp-step-label">User Credentials</span>
            </div>
            <div className="otp-progress-line"></div>
            <div className="otp-step active">
              <span className="otp-step-number">2</span>
              <span className="otp-step-label">OTP Verification</span>
            </div>
          </div>

          <p className="otp-form-title">Verify OTP</p>

          <form className="otp-verification-form">
            <p className="mandatory-note">* indicates mandatory fields</p>

            <div className="otp-form-group">
              <label>
                Mobile OTP <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter OTP sent to your mobile number"
              />
            </div>

            <div className="otp-form-group">
              <label>
                Email OTP <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter OTP sent to your Email Address"
              />
              <small>
                Please check the junk/spam folder in case you do not get an
                email.
              </small>
            </div>

            <div className="otp-help">
              Need OTP to be resent? <a href="#">Click here</a>
            </div>

            <div className="otp-button-group">
              <button type="button" className="back-buttons">
                BACK
              </button>
              <button type="submit" className="proceed-buttons">
                PROCEED
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
