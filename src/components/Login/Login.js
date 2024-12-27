import React, { useState } from 'react';
import './Login.css';
import panIcons from '../../assets/pan.svg';
import aadhaarIcon from '../../assets/adhaar.svg';
import userIdIcon from '../../assets/userId.svg';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [showMore, setShowMore] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="login-card-container">
      <div className="login-card">
        <div className="form-section">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Enter your User ID *</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="PAN/Aadhaar/User ID"
                required
              />
            </div>
            <button type="submit" className="continue-btn">
              Continue
            </button>
            <button type="button" className="back-btn">
              Back
            </button>
            <h5 className="register-text">
              Do not have an account? <a href="/register">Register</a>
            </h5>
          </form>
          <div className="other-access">
            <h3>Other ways to access your account</h3>
            <div className="net-banking">
              <span className="bank-icon">🏦</span>
              <span>Net Banking</span>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h3>Know about your User ID</h3>

          <div className="login-info-item">
            <img src={panIcons} alt="PAN" className="login-info-icon" />
            <div className="login-info-content">
              <p>PAN (Permanent Account Number)</p>
              <p>Individuals (Salaried employee, Senior citizen, Freelancer, NRI)</p>
              <p>Other Than Individuals (Company, Trust, AOP, AJP, BOI, Firm, HUF, Local Authority)</p>
            </div>
          </div>

          <div className="login-info-item">
            <img src={aadhaarIcon} alt="Aadhaar" className="login-info-icon" />
            <div className="login-info-content">
              <p>Aadhaar Number</p>
              <p>Individuals (Salaried employee, Senior citizen, Freelancer, NRI)</p>
            </div>
          </div>

          <div className="login-info-item">
            <img src={userIdIcon} alt="User ID" className="login-info-icon" />
            <div className="login-info-content">
              <p>Other than PAN users</p>
              <p>CA, External Agency, ERI, Tax Deductor & Tax Collector, TIN 2.0 Stakeholders, ITDREIN, Non-Residents not holding and not required to have PAN</p>
              <ul>
                <li>ARCA (Authorised Representative Chartered Accountant) followed by 6 digit number</li>
                <li>TAN (Tax Deductor & Collector)</li>
                {showMore && (
                  <>
                    <li>ERIP (ERI User) followed by 6 digit number</li>
                    <li>TINN (TIN 2.0 User) followed by 6 digit number</li>
                    <li>EXTP (External Agency) followed by 6 digit number</li>
                    <li>
                      ITDREIN (Income Tax Department Reporting Entity Identification Number) user ID will be PAN/TAN of reporting entity followed by 2 alphabets and 3 digits
                    </li>
                    <li>
                      Non-Residents not holding and not required to have PAN - User ID will be NR followed by 2 alphabets and 6 digits allocated at the time of registration.
                    </li>
                  </>
                )}
              </ul>
              <button onClick={toggleShowMore} className="show-more-btn">
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
