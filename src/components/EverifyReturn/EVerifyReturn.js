import React, { useState } from 'react';
import './EVerifyReturn.css';

const EVerifyReturn = () => {
  const [formData, setFormData] = useState({
    pan: '',
    assessmentYear: '',
    acknowledgementNumber: '',
    mobileNumber: ''
  });

  return (
    <div className="everify-return-wrapper">
      <div className="everify-progress-container">
        <div className="everify-step active">
          <span className="everify-step-number">1</span>
          <p className="everify-step-text">Enter Return Details</p>
        </div>
        <div className="everify-step">
          <span className="everify-step-number">2</span>
          <p className="everify-step-text">Verification</p>
        </div>
        <div className="everify-step">
          <span className="everify-step-number">3</span>
          <p className="everify-step-text">Select Method For Return Verification</p>
        </div>
        <div className="everify-step">
          <span className="everify-step-number">4</span>
          <p className="everify-step-text">Return Successfully Verified</p>
        </div>
      </div>
      
      <div className="everify-main-content">
        <div className="everify-form-container">
          <h1 className="everify-title">e-Verify Return</h1>
          <p className="everify-mandatory-note">
            <span className="everify-asterisk">*</span> Indicates mandatory fields
          </p>
          <div className="everify-form-section">
            <h2 className="everify-form-heading">Enter the following details :</h2>
            
            <div className="everify-form-group">
              <label className="everify-label">
                PAN <span className="everify-asterisk">*</span>
              </label>
              <input
                className="everify-input"
                type="text"
                value={formData.pan}
                onChange={(e) => setFormData({...formData, pan: e.target.value})}
              />
            </div>

            <div className="everify-form-group">
              <label className="everify-label">
                Assessment Year <span className="everify-asterisk">*</span>
              </label>
              <select 
                className="everify-select"
                value={formData.assessmentYear}
                onChange={(e) => setFormData({...formData, assessmentYear: e.target.value})}
              >
                <option value="">Select Assessment Year</option>
              </select>
            </div>

            <div className="everify-form-group">
              <label className="everify-label">
                Acknowledgement Number <span className="everify-asterisk">*</span>
              </label>
              <input
                className="everify-input"
                type="text"
                value={formData.acknowledgementNumber}
                onChange={(e) => setFormData({...formData, acknowledgementNumber: e.target.value})}
              />
            </div>

            <div className="everify-form-group">
              <label className="everify-label">
                Mobile Number <span className="everify-asterisk">*</span>
              </label>
              <div className="everify-mobile-input">
                <div className="everify-country-code">
                  <img src="/india-flag.png" alt="India flag" className="everify-flag" />
                  +91
                </div>
                <input
                  className="everify-input"
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="everify-button-container">
            <button className="everify-back-btn">Back</button>
            <button className="everify-continue-btn">Continue</button>
          </div>
        </div>

        <div className="everify-note-section">
          <p className="everify-note-title">Note:</p>
          <ol className="everify-note-list">
            <li>You can e-Verify when
              <ul>
                <li>Returns filed for Assessment Year is 2019-20 and onwards</li>
                <li>Returns where Digital Signature Certificate (DSC) is not mandatory</li>
                <li>Returns are not filed by an Authorised Signatory or Representative Assessee</li>
              </ul>
            </li>
            <li>Authorised Signatory and Representative Assessee are required to e-Verify their return post login to File at their respective capacity</li>
            <li>Returns filed on and after 1st August 2022 should be verified within 30 days from date of filing. For Returns verified beyond 30 days (and before the due date for the respective AY), the date of verification shall be treated as date of filing.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EVerifyReturn;