import React, { useState } from 'react';
import './OTPPage.css'; // Assume you have a CSS file for styling

const OTPPage = () => {
  const [mobileOTP, setMobileOTP] = useState(['', '', '', '', '', '']);
  const [emailOTP, setEmailOTP] = useState(['', '', '', '', '', '']);

  const handleInputChange = (event, index, type) => {
    const value = event.target.value.slice(-1); // Only take the last entered digit

    if (type === 'mobile') {
      const newMobileOTP = [...mobileOTP];
      newMobileOTP[index] = value;
      setMobileOTP(newMobileOTP);

      // Move to the next input if not the last box
      if (value && index < 5) {
        document.getElementById(`mobile-otp-${index + 1}`).focus();
      }
    } else {
      const newEmailOTP = [...emailOTP];
      newEmailOTP[index] = value;
      setEmailOTP(newEmailOTP);

      if (value && index < 5) {
        document.getElementById(`email-otp-${index + 1}`).focus();
      }
    }
  };

  const handleResendOTP = () => {
    alert('Resending OTP...'); // Simulate resend OTP logic
  };

  return (
    <div className="otp-page">
      <h1>Enter the OTP</h1>
      <p>
        We have sent a One Time Password (OTP) in a text message (SMS) to your
        Primary mobile number 91xxxxxx73 and primary email id abc******34@gmail.com
      </p>

      <div className="otp-input-group">
        <label>Mobile OTP *</label>
        <div className="otp-input-container">
          {mobileOTP.map((digit, index) => (
            <input
              key={index}
              id={`mobile-otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index, 'mobile')}
            />
          ))}
        </div>
      </div>

      <div className="otp-input-group">
        <label>Email OTP *</label>
        <div className="otp-input-container">
          {emailOTP.map((digit, index) => (
            <input
              key={index}
              id={`email-otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index, 'email')}
            />
          ))}
        </div>
      </div>

      <div className="otp-timer">
        <p>Both OTP expires in 14m:45s</p>
        <p>3 Attempts remaining</p>
      </div>

      <button className="resend-otp-button" onClick={handleResendOTP}>
        Resend OTP (Allowed only once)
      </button>

      <p className="note">
        Note: You can go back and update your details if required.
      </p>

     
     
    </div>
  );
};

export default OTPPage;
