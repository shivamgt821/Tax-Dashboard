import React, { useState } from "react";
import "./ContactDetails.css"; // External CSS file

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    primaryMobile: "",
    mobileBelongsTo: "",
    email: "",
    emailBelongsTo: "",
    landline: "",
    address: {
      country: "INDIA",
      flat: "",
      street: "",
      pincode: "",
      postOffice: "",
      locality: "",
      city: "",
      state: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.address) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form className="contact-details-form" onSubmit={handleSubmit}>
      <h2>Registering as - Individual</h2>

      <div className="contact-details-form-group">
        <label htmlFor="primaryMobile">Primary Mobile Number *</label>
        <div className="input-with-iconss">
          <span className="country-code">+91</span>
          <input
            type="text"
            name="primaryMobile"
            id="primaryMobile"
            value={formData.primaryMobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            required
          />
        </div>
      </div>

      <div className="contact-details-form-group">
        <label htmlFor="mobileBelongsTo">Primary Mobile Number Belongs to *</label>
        <select
          name="mobileBelongsTo"
          id="mobileBelongsTo"
          value={formData.mobileBelongsTo}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Self">Self</option>
          <option value="Family">Family</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="contact-details-form-group">
        <label htmlFor="email">Primary Email ID *</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email ID"
          required
        />
      </div>

      <div className="contact-details-form-group">
        <label htmlFor="emailBelongsTo">Primary Email ID Belongs to *</label>
        <select
          name="emailBelongsTo"
          id="emailBelongsTo"
          value={formData.emailBelongsTo}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Self">Self</option>
          <option value="Family">Family</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* <div className="info-note">
        <p><strong>Please Note:</strong> On click of “Continue,” different OTPs will be sent on the Primary Mobile Number and Primary Email ID for verification.</p>
      </div> */}

      <div className="contact-details-form-group">
        <label htmlFor="landline">Landline Number</label>
        <div className="input-with-iconss">
          <span className="country-code">+91</span>
          <input
            type="text"
            name="landline"
            id="landline"
            value={formData.landline}
            onChange={handleChange}
            placeholder="Enter Landline Number"
          />
        </div>
      </div>

      <h3>Postal Address Details</h3>

      <div className="contact-details-form-group">
        <label htmlFor="country">Country *</label>
        <input
          type="text"
          name="country"
          id="country"
          value={formData.address.country}
          readOnly
        />
      </div>

      <div className="contact-details-form-group">
        <label htmlFor="flat">Flat/Door/Building *</label>
        <input
          type="text"
          name="flat"
          id="flat"
          value={formData.address.flat}
          onChange={handleChange}
          placeholder="Enter Address"
          required
        />
      </div>

      <div className="contact-details-form-group">
        <label htmlFor="street">Road/Street/Block/Sector</label>
        <input
          type="text"
          name="street"
          id="street"
          value={formData.address.street}
          onChange={handleChange}
          placeholder="Enter Street Details"
        />
      </div>

      <div className="contact-details-form-group">
        <label htmlFor="pincode">Pincode *</label>
        <input
          type="text"
          name="pincode"
          id="pincode"
          value={formData.address.pincode}
          onChange={handleChange}
          placeholder="Enter Pincode"
          required
        />
      </div>

      <div className="contact-details-form-group">
        <label htmlFor="postOffice">Post Office *</label>
        <input
          type="text"
          name="postOffice"
          id="postOffice"
          value={formData.address.postOffice}
          onChange={handleChange}
          placeholder="Enter Post Office"
          required
        />
      </div>

      <div className="contact-details-form-group">
        <label htmlFor="locality">Area/Locality *</label>
        <input
          type="text"
          name="locality"
          id="locality"
          value={formData.address.locality}
          onChange={handleChange}
          placeholder="Enter Locality"
          required
        />
      </div>

      <div className="contact-details-form-group">
        <label htmlFor="city">Town/City/District *</label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.address.city}
          onChange={handleChange}
          placeholder="Enter City"
          required
        />
      </div>

      <div className="contact-details-form-group">
        <label htmlFor="state">State *</label>
        <input
          type="text"
          name="state"
          id="state"
          value={formData.address.state}
          onChange={handleChange}
          placeholder="Enter State"
          required
        />
      </div>

      <div className="conact-form-actions">
        <button type="button" className="conact-back-button">Back</button>
        <button type="submit" className="conact-continue-button">Continue</button>
      </div>
    </form>
  );
};

export default ContactDetails;
