import React, { useEffect, useState } from "react";
import "./BasicDetails.css";
import BASIC_URL from "../../constants";

const BasicDetails = () => {
  
  const getPenDetails = localStorage.getItem("penDetails");
  console.log("Get data from get started",getPenDetails);
  const [formData, setFormData] = useState({
    pan: "",
    lastName: "",
    middleName: "",
    firstName: "",
    dob: "",
    gender: "",
    residentialStatus: "",
    mobileNumber: "",
    email: "",
    address: {
      country:"",
      flat: "",
      street: "",
      pincode: "",
      postOffice: "",
      locality: "",
      city: "",
      state: "",
    },
  });

  const [countries, setCountries] = useState([]);

    // Fetch countries from the API
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          console.log("Fetching countries...");
          const response = await fetch(`${BASIC_URL}/api/countries`);
          if (response.ok) {
            const data = await response.json();
            console.log("Fetched countries:", data);
            setCountries(data);
          } else {
            console.error("Failed to fetch countries.Status:",response.status);
          }
        } catch (error) {
          console.error("Error fetching countries:", error);
        }
      };
  
      fetchCountries();
    }, []);

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
    <div className="registration-form">
      <h3>Registering as - Individual</h3>
      <form onSubmit={handleSubmit}>
        {/* Basic Details Fields */}
        <div className="basic-details-form-group">
          <label htmlFor="pan">PAN *</label>
          <input
            type="text"
            id="pan"
            name="pan"
            placeholder="Enter PAN"
            value={getPenDetails}
            onChange={handleChange}
            required
          />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            placeholder="Enter Middle Name"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="dob">Date of Birth *</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="basic-details-form-group">
          <label>Gender *</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="transgender"
                checked={formData.gender === "transgender"}
                onChange={handleChange}
              />
              Transgender
            </label>
          </div>
        </div>

        <div className="basic-details-form-group">
          <label>Residential Status *</label>
          <div className="residential-options">
            <label>
              <input
                type="radio"
                name="residentialStatus"
                value="resident"
                checked={formData.residentialStatus === "resident"}
                onChange={handleChange}
                required
              />
              Resident
            </label>
            <label>
              <input
                type="radio"
                name="residentialStatus"
                value="nonResident"
                checked={formData.residentialStatus === "nonResident"}
                onChange={handleChange}
              />
              Non-Resident
            </label>
          </div>
        </div>

        {/* Contact Details Fields */}
        <div className="basic-details-form-group">
          <label htmlFor="mobileNumber">Mobile Number *</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Address Details</h3>
        <div className="basic-details-form-group">
        <label htmlFor="country">Country *</label>
          <select
            id="country"
            name="country"
            value={formData.address.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <label htmlFor="flat">Flat/Door/Building *</label>
          <input
            type="text"
            id="flat"
            name="flat"
            placeholder="Enter Flat/Door/Building"
            value={formData.address.flat}
            onChange={handleChange}
            required
          />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="street">Street/Block/Sector</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Enter Street/Block/Sector"
            value={formData.address.street}
            onChange={handleChange}
          />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="pincode">Pincode *</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            placeholder="Enter Pincode"
            value={formData.address.pincode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="city">City *</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter City"
            value={formData.address.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="state">State *</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter State"
            value={formData.address.state}
            onChange={handleChange}
            required
          />
        </div>

    
      </form>
    </div>
  );
};

export default BasicDetails;
