import React, { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [selectedType, setSelectedType] = useState("New Registration");

  return (
    <div className="registration-outer-layer">
      <div className="registration-container">
        <div className="breadcrumb">
          <span>
            <a href="/" className="home-link">
              Home
            </a>{" "}
            &gt; Registration
          </span>
          <span className="language-switch">English</span>
        </div>

        <div className="registration-card">
      
          <div className="everify-progress-container">
            <div className="everify-step active">
              <span className="everify-step-number">1</span>
              <p className="everify-step-text">User Credentials</p>
            </div>
            <div className="everify-step">
              <span className="everify-step-number">2</span>
              <p className="everify-step-text">OTP Verification</p>
            </div>
          </div>

         <div className="form-titlels"> <h3>New Registration</h3>
         </div>
          <div className="reg-form-section">
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="registrationType"
                  value="New Registration"
                  checked={selectedType === "New Registration"}
                  onChange={(e) => setSelectedType(e.target.value)}
                />
                New Registration
              </label>
              <label>
                <input
                  type="radio"
                  name="registrationType"
                  value="Temporary Reference Number (TRN)"
                  onChange={(e) => setSelectedType(e.target.value)}
                />
                Temporary Reference Number (TRN)
              </label>
            </div>

            <form className="registration-form">
              <div className="reg-form-group">
                <label>I am a *</label>
                <select>
                  <option>Select</option>
                  <option>Taxpayer</option>
                  <option>Tax Deductor</option>
                  <option>Tax Collector(e-Commerce)</option>
                  <option>GST Practitioner</option>
                  <option>Non Resident Taxable Person</option>
                  <option>United Nation Body</option>
                  <option>Consulate or Embassy of Foreign Country</option>
                  <option>Other Notified Person</option>
                  <option>Non-Resident Online Services Provider and/or Non-Resident Online Money Gaming Provider</option>
                </select>
              </div>

              <div className="reg-form-group">
                <label>State / UT *</label>
                <select>
                  <option>Select</option>
                  <option>State 1</option>
                  <option>State 2</option>
                </select>
              </div>

              <div className="reg-form-group">
                <label>District</label>
                <select>
                  <option>Select</option>
                  <option>District 1</option>
                  <option>District 2</option>
                </select>
              </div>

              <div className="reg-form-group">
                <label>
                  Legal Name of the Business (As mentioned in PAN) *
                </label>
                <input type="text" placeholder="Enter Legal Name of Business" />
              </div>

              {/* <div className="reg-form-group">
                <label>Legal Name of the Person *</label>
                <input type="text" placeholder="Enter Legal Name of the person" />
              </div> */}
              <div className="reg-form-group">
                <label>Permanent Account Number (PAN) *</label>
                <input
                  type="text"
                  placeholder="Enter Permanent Account Number (PAN)"
                />
                {/* <small>If you don't have PAN, Click here to apply</small> */}
              </div>

              {/* <div className="reg-form-group">
                <label>Tax identification number (TIN)/ Unique Number *</label>
                <input
                  type="text"
                  placeholder="Enter TIN or Unique Number of the entity of the country of Origin"
                />
              </div>

              <div className="reg-form-group">
                <label>Name of the Authorized Signatory*</label>
                <input
                  type="text"
                  placeholder="Enter Name of Authorized Signatory"
                />
                <small>Details of Primary Authorized Signatory to be added</small>
              </div>
              <div className="reg-form-group">
                <label>Permanent Account Number (PAN) of the Authorized Signatory *</label>
                <input
                  type="text"
                  placeholder="Enter Permanent Account Number (PAN)"
                />
              </div> */}
              <div className="reg-form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="Enter Email Address" />
                <small>OTP will be sent to this Email Address</small>
              </div>

              <div className="reg-form-group">
                <label>Mobile Number of Authorized Signatory *</label>
                <div className="mobile-input">
                  <span>+91</span>
                  <input type="text" placeholder="Enter Mobile Number" />
                </div>
                <small>Separate OTP will be sent to this mobile number</small>
              </div>

              <button type="submit" className="proceed-button">
                PROCEED
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
