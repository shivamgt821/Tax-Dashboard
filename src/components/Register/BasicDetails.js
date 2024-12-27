// RegistrationForm.js
import React from 'react';
import './BasicDetails.css';
const BasicDetails = () => {
  return (
    <div className="registration-form">
      <h2>Registering as - Individual</h2>

      <form>
        <div className="basic-details-form-group">
          <label htmlFor="pan">PAN *</label>
          <input type="text" id="pan" name="pan" placeholder="Enter PAN" required />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" required />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input type="text" id="middleName" name="middleName" placeholder="Enter Middle Name" />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="firstName">First Name *</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" required />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="dob">Date of Birth *</label>
          <input type="date" id="dob" name="dob" required />
        </div>

        <div className="basic-details-form-group">
          <label>Gender *</label>
          <div className="gender-options">
            <label><input type="radio" name="gender" value="male" required /> Male</label>
            <label><input type="radio" name="gender" value="female" /> Female</label>
            <label><input type="radio" name="gender" value="transgender" /> Transgender</label>
          </div>
        </div>

        <div className="basic-details-form-group">
          <label>Residential Status *</label>
          <div className="residential-options">
            <label><input type="radio" name="residentialStatus" value="resident" required /> Resident</label>
            <label><input type="radio" name="residentialStatus" value="nonResident" /> Non-Resident</label>
          </div>
        </div>

        <div className="basic-details-form-actions">
          <button type="button" className="basic-details-back-button">Back</button>
          <button type="submit" className="basic-details-continue-button">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;
