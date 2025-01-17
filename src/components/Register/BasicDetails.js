import React, { useEffect, useState } from "react";
import "./BasicDetails.css";
import BASIC_URL from "../../constants";
import { Button, Grid } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BasicDetails = ({ onBack, onContinue }) => {
  const getPenDetails = localStorage.getItem("penDetails");
  console.log("Get data from get started", getPenDetails);

  const [formData, setFormData] = useState({
    pan: "",
    lastName: "",
    middleName: "",
    firstName: "",
    dateOfBirth: "",
    gender: "",
    residentialStatus: "",
    mobileNumber: "",
    email: "",
    password: "",
    address: {
      country: "",
      flatOrDoor: "",
      streetBlock: "",
      pincode: "",
      city: "",
      state: "",
    },
  });

  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [otpMessage, setOtpMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    // Name validation (no integers or special characters)
    if (!formData.firstName.match(/^[A-Za-z\s]+$/)) {
      newErrors.firstName = "First Name should only contain alphabets.";
    }
    if (formData.middleName && !formData.middleName.match(/^[A-Za-z\s]+$/)) {
      newErrors.middleName = "Middle Name should only contain alphabets.";
    }
    if (!formData.lastName.match(/^[A-Za-z\s]+$/)) {
      newErrors.lastName = "Last Name should only contain alphabets.";
    }

    // Required field validation
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.residentialStatus)
      newErrors.residentialStatus = "Residential status is required.";

    // Mobile number validation (only numbers and '+' allowed, field cannot be empty)
  if (!formData.mobileNumber.trim()) {
    newErrors.mobileNumber = "Please fill in the mobile number.";
  } else if (!formData.mobileNumber.match(/^\+?[0-9]+$/)) {
    newErrors.mobileNumber =
      "Mobile number should only contain numbers and optionally start with '+'.";
  }
  


    // Email validation
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Address validations
    if (!formData.address.country) newErrors.country = "Country is required.";
    if (!formData.address.flatOrDoor.trim())
      newErrors.flatOrDoor = "flat/Door/Building is required.";
    if (!formData.address.pincode.match(/^\d{6}$/)) {
      newErrors.pincode = "Pincode must be a valid 6-digit number.";
    }
    if (!formData.address.city.match(/^[A-Za-z\s]+$/)) {
      newErrors.city = "City should only contain alphabets.";
    }
    if (!formData.address.state.match(/^[A-Za-z\s]+$/)) {
      newErrors.state = "State should only contain alphabets.";
    }

    console.log("Validation errors:", newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleContinue = async () => {
    if (validate()) {
      setLoading(true);
      setOtpMessage("");
      try {
        const otpResponse = await fetch(
          `http://localhost:8080/api/otp/send?email=${encodeURIComponent(
            formData.email
          )}&mobile=${formData.mobileNumber}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (otpResponse.ok) {
          console.log("OTP sent successfully.");
          onContinue();

          // Storing each field in localStorage separately
          Object.keys(formData).forEach((key) => {
            if (typeof formData[key] === "object") {
              // Store nested address fields
              Object.keys(formData[key]).forEach((subKey) => {
                localStorage.setItem(subKey, formData[key][subKey]);
              });
            } else {
              localStorage.setItem(key, formData[key]);
            }
          });

          console.log("Form Data Saved:", formData);
        } else {
          console.error("Failed to send OTP. Status:", otpResponse.status);
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
      } finally {
        setLoading(false); 
      }
    } else {
      alert("Please fix the errors in the form.");
    }
  };

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
          console.error("Failed to fetch countries. Status:", response.status);
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
        <div className="basic-details-form-group">
          <label htmlFor="pan">PAN *</label>
          <input
            type="text"
            id="pan"
            name="pan"
            placeholder="Enter PAN"
            // value={formData.pan}
            value={formData.getPenDetails}
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
          {errors.lastName && <span className="error">{errors.lastName}</span>}
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
          {errors.middleName && (
            <span className="error">{errors.middleName}</span>
          )}
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
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div className="basic-details-form-group">
          <label htmlFor="dateOfBirth">Date of Birth *</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
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
          {errors.gender && <span className="error">{errors.gender}</span>}
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

        <div className="basic-details-form-group">
          <label htmlFor="mobileNumber">Mobile Number *</label>
          <PhoneInput
            country={"in"}
            value={formData.mobileNumber}
            onChange={(phone) =>
              setFormData({ ...formData, mobileNumber: phone })
            }
            inputStyle={{ width: "100%" }} // Adjust width
          />
          {errors.mobileNumber && (
            <span className="error">{errors.mobileNumber}</span>
          )}
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
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
         {/* Password Field */}
         <div className="basic-details-form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
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
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div className="basic-details-form-group">
          <label htmlFor="flatOrDoor">flatOrDoor/Door/Building *</label>
          <input
            type="text"
            id="flatOrDoor"
            name="flatOrDoor"
            placeholder="Enter flatOrDoor/Door/Building"
            value={formData.address.flatOrDoor}
            onChange={handleChange}
            required
          />
          {errors.flatOrDoor && <span className="error">{errors.flatOrDoor}</span>}
        </div>
        <div className="basic-details-form-group">
          <label htmlFor="streetBlock">streetBlock/Area</label>
          <input
            type="text"
            id="streetBlock"
            name="streetBlock"
            placeholder="Enter streetBlock/Area"
            value={formData.address.streetBlock}
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
          {errors.pincode && <span className="error">{errors.pincode}</span>}
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
          {errors.city && <span className="error">{errors.city}</span>}
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
          {errors.state && <span className="error">{errors.state}</span>}
        </div>
        <Grid container justifyContent="space-between" sx={{ mt: 4 }}>
          <Button variant="outlined" onClick={onBack}>
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleContinue}
            disabled={!validate || loading} // Disable if loading
          >
            {loading ? "Sending OTP..." : "Continue"}
          </Button>
        </Grid>
        {/* Show OTP Message and Loading Spinner */}
        {loading && <div className="loading-spinner">Loading...</div>}{" "}
        {/* You can replace with a spinner component */}
        {otpMessage && <div className="otp-message">{otpMessage}</div>}
      </form>
    </div>
  );
};

export default BasicDetails;
