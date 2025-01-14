import React, { useEffect, useState } from "react";
import "./BasicDetails.css";
import BASIC_URL from "../../constants";
import { Button, Grid } from "@mui/material";

const BasicDetails = ({ onBack, onContinue }) => {
  const getPenDetails = localStorage.getItem("penDetails");
  console.log("Get data from get started", getPenDetails);

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
      country: "",
      flat: "",
      street: "",
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
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.residentialStatus)
      newErrors.residentialStatus = "Residential status is required.";

    // Mobile number validation (10 digits)
    if (!formData.mobileNumber.match(/^[6-9]\d{9}$/)) {
      newErrors.mobileNumber = "Enter a valid 10-digit mobile number.";
    }

    // Email validation
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Address validations
    if (!formData.address.country) newErrors.country = "Country is required.";
    if (!formData.address.flat.trim())
      newErrors.flat = "Flat/Door/Building is required.";
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

  // const handleContinue = () => {
  //   if (validate()) {
  //     onContinue();

  //     // Storing each field in localStorage separately
  //     Object.keys(formData).forEach((key) => {
  //       if (typeof formData[key] === "object") {
  //         // Store nested address fields
  //         Object.keys(formData[key]).forEach((subKey) => {
  //           localStorage.setItem(subKey, formData[key][subKey]);
  //         });
  //       } else {
  //         localStorage.setItem(key, formData[key]);
  //       }
  //     });

  //     console.log("Form Data Saved:", formData);
  //   } else {
  //     alert("Please fix the errors in the form.");
  //   }
  // };


  const handleContinue = async () => {
    if (validate()) {
      setLoading(true);
      setOtpMessage("");
      try {
        const otpResponse = await fetch(
          `http://localhost:8080/api/otp/send?email=${encodeURIComponent(formData.email)}&mobile=${formData.mobileNumber}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
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
      }finally {
        setLoading(false); // Set loading to false after the request is finished
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
          <label htmlFor="dob">Date of Birth *</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          {errors.dob && <span className="error">{errors.dob}</span>}
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

        {/* Additional fields with validation */}
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
          {errors.flat && <span className="error">{errors.flat}</span>}
        </div>

        <div className="basic-details-form-group">
          <label htmlFor="street">Street/Area</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Enter Street/Area"
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
      {loading && <div className="loading-spinner">Loading...</div>} {/* You can replace with a spinner component */}
      {otpMessage && <div className="otp-message">{otpMessage}</div>}
    </form>
       
    </div>
  );
};

export default BasicDetails;
