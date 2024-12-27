import React, { useState } from 'react';
import './Register.css';
import dummyIcon from '../../assets/Registerblock.svg'


const Register = () => {
  const [pan, setPan] = useState('');
  const [userType, setUserType] = useState('Taxpayer');
  const [userId, setUserId] = useState('');
  const [showMore, setShowMore] = useState(false);

  const handleValidate = () => {
    // Add PAN validation logic here
  };

  const handleContinue = () => {
    // Add continuation logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    
    <div className="register-container">
      <div className="register-progress-container">
        <div className="register-step active">
          <span className="register-step-number">1</span>
          <p className="register-step-text">Enter Return Details</p>
        </div>
        <div className="everify-step">
          <span className="register-step-number">2</span>
          <p className="register-step-text">Verification</p>
        </div>
        <div className="everify-step">
          <span className="register-step-number">3</span>
          <p className="register-step-text">Select Method For Return Verification</p>
        </div>
        <div className="everify-step">
          <span className="register-step-number">4</span>
          <p className="register-step-text">Return Successfully Verified</p>
        </div>
      </div>
      <div className="breadcrumb">
        <p>Register and find all your tax data in a single secure platform!</p>
      </div>

      <div className="register-card">
        <div className="register-form-section">
          <h1 className="register-title">Let's Get Started</h1>
          <form onSubmit={handleSubmit}>
          <div className="register-input-group">
          <label>Enter your User ID *</label>
          <div className="input-with-button">
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="PAN/Aadhaar/User ID"
              required
            />
            <button type="button" className="validate-btn" disabled>
              Validate
            </button>
          </div>
        </div>

            <button type="submit" className="continue-btns">
              Continue
            </button>
            <button type="button" className="back-btns">
              Cancel
            </button>
         
          </form>
        
        </div>

        <div className="register-info-section">
        <div className="info-container">
        <img src={dummyIcon} alt="Info Icon" className="info-icon" />
        <p className="info-text">
            Individuals / Hindu Undivided Family / Company / Trust / Local 
            Authority / Artificial Juridical Person / Firm /
            Limited Liability Partnership / Association of Persons / Political Party / Government / Body Of Individuals
          </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Register;
