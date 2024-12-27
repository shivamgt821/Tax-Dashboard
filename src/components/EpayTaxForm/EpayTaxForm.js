import React, { useState } from 'react';
import './EpayTaxForm.css';

const EPayTax = () => {
  const [formData, setFormData] = useState({
    pan: '',
    confirmPan: '',
    mobile: ''
  });

  return (
    <div className="e-pay-container">
      <div className="breadcrumb">
        <a href="/">Home</a> &gt; e-Pay Tax
      </div>

      <h1>e-Pay Tax</h1>

      <div className="instructions">
        <p>Please fill in the below details for tax payment through (i) Net Banking (ii) Debit Card (iii) Over the Counter (iv) NEFT/RTGS (v) Payment Gateway.</p>
        <p>
          Please click on <a href="/list-of-banks" className="bank-link">List of Banks</a> to know the banks onboarded on e-Pay Tax service.
        </p>
        <p className="mandatory-note">
          <span className="asterisk">*</span> Indicates the mandatory fields
        </p>
      </div>

      <div className="tax-form-container">
    <div className="pan-row">
    <div className="input-group">
      <label className="input-label">
        PAN / TAN <span className="required">*</span>
      </label>
      <input
        className="input-field"
        type="text"
        value={formData.pan}
        onChange={(e) => setFormData({...formData, pan: e.target.value})}
      />
    </div>
    <div className="input-group">
      <label className="input-label">
        Confirm PAN / TAN <span className="required">*</span>
      </label>
      <input
        className="input-field"
        type="text"
        value={formData.confirmPan}
        onChange={(e) => setFormData({...formData, confirmPan: e.target.value})}
      />
    </div>
  </div>
  
  <div className="mobile-verification">
    <p className="verification-text">Enter Mobile Number for OTP verification</p>
    <div className="input-group">
      <label className="input-label">
        Mobile <span className="required">*</span>
      </label>
      <div className="mobile-input-container">
        <span className="country-code">🇮🇳 +91</span>
        <input
          className="input-field"
          type="tel"
          value={formData.mobile}
          onChange={(e) => setFormData({...formData, mobile: e.target.value})}
        />
      </div>
    </div>
  </div>
    </div>

      <div className="button-container">
        <button className="back-buttons">〈 Back</button>
        <button className="continue-buttons">Continue 〉</button>
      </div>
    </div>
  );
};

export default EPayTax;