// import React, { useState, useEffect } from "react";
// import "./OTPPage.css"; // Assume you have a CSS file for styling
// import { SiOutline } from "react-icons/si";

// const OTPPage = () => {
//   const [mobileOTP, setMobileOTP] = useState(["", "", "", "", "", ""]);
//   const [emailOTP, setEmailOTP] = useState(["", "", "", "", "", ""]);
//   const [isVerifying, setIsVerifying] = useState(false); // To handle API call state

//   // Trigger verification when both OTPs are complete
//   useEffect(() => {
//     if (mobileOTP.join("").length === 6 && emailOTP.join("").length === 6) {
//       verifyOTP();
//     }
//   }, [mobileOTP, emailOTP]);

//   const handleInputChange = (event, index, type) => {
//     const value = event.target.value.slice(-1);

//     if (type === "mobile") {
//       const newMobileOTP = [...mobileOTP];
//       newMobileOTP[index] = value;
//       setMobileOTP(newMobileOTP);

//       // Move to the next input if not the last box
//       if (value && index < 5) {
//         document.getElementById(`mobile-otp-${index + 1}`).focus();
//       }
//     } else {
//       const newEmailOTP = [...emailOTP];
//       newEmailOTP[index] = value;
//       setEmailOTP(newEmailOTP);

//       // Move to the next input if not the last box
//       if (value && index < 5) {
//         document.getElementById(`email-otp-${index + 1}`).focus();
//       }
//     }
//   };

//   const verifyOTP = async () => {

//     const mobileOTPString = mobileOTP.join("");
//     const emailOTPString = emailOTP.join("");

//     if (mobileOTPString.length === 6 && emailOTPString.length === 6) {
//       setIsVerifying(true);
//       const requestData = {
//         phoneNumber: localStorage.getItem("mobileNumber"), 
//         otpCode: mobileOTPString,
//         email: localStorage.getItem("email"),
//         otpCodeEmail: emailOTPString,
//       };
//       console.log("Request Payload:", requestData);
//       try {
//         console.log("process started");
//         const response = await fetch("http://localhost:8080/api/otp/verifyOTP", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(requestData),
//         });
//         console.log("start 1" +response);
//         if (!response.ok) {
//           const errorData = await response.text();
//           console.error("Error Response:", errorData);
//           throw new Error(`OTP verification failed: ${errorData}`);
//         }
//         console.log("start 2");
//         const result = await response.json();
//         console.log("Verification Success:", result);
//         alert("OTP verification successful!");
//       } catch (error) {
//         console.error("Error during OTP verification:", error);
//         alert(`OTP verification failed. Reason: ${error.message}`);
//       } finally {
//         setIsVerifying(false);
//       }
//     }
//   };

//   const handleResendOTP = () => {
//     alert("Resending OTP...");
//   };

//   return (
//     <div className="otp-page">
//       <h1>Enter the OTP</h1>
//       <p>
//         We have sent a One Time Password (OTP) in a text message (SMS) to your
//         Primary mobile number +91xxxxxx73 and primary email id
//         abc******34@gmail.com
//       </p>

//       <div className="otp-input-group">
//         <label>Mobile OTP *</label>
//         <div className="otp-input-container">
//           {mobileOTP.map((digit, index) => (
//             <input
//               key={index}
//               id={`mobile-otp-${index}`}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleInputChange(e, index, "mobile")}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="otp-input-group">
//         <label>Email OTP *</label>
//         <div className="otp-input-container">
//           {emailOTP.map((digit, index) => (
//             <input
//               key={index}
//               id={`email-otp-${index}`}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleInputChange(e, index, "email")}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="otp-timer">
//         <p>Both OTP expires in 14m:45s</p>
//         <p>3 Attempts remaining</p>
//       </div>

//       <button className="resend-otp-button" onClick={handleResendOTP}>
//         Resend OTP (Allowed only once)
//       </button>

//       <p className="note">
//         Note: You can go back and update your details if required.
//       </p>

//       {isVerifying && <p>Verifying OTPs...</p>}
//     </div>
//   );
// };

// export default OTPPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./OTPPage.css";
import { Button } from "@mui/material";
import BASIC_URL from "../../constants";

const OTPPage = () => {
  const [mobileOTP, setMobileOTP] = useState(["", "", "", "", "", ""]);
  const [emailOTP, setEmailOTP] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();

  // Trigger verification when both OTPs are complete
  useEffect(() => {
    if (mobileOTP.join("").length === 6 && emailOTP.join("").length === 6) {
      verifyOTP();
    }
  }, [mobileOTP, emailOTP]);

  const handleInputChange = (event, index, type) => {
    const value = event.target.value.slice(-1);

    if (type === "mobile") {
      const newMobileOTP = [...mobileOTP];
      newMobileOTP[index] = value;
      setMobileOTP(newMobileOTP);

      // Move to the next input if not the last box
      if (value && index < 5) {
        document.getElementById(`mobile-otp-${index + 1}`).focus();
      }
    } else {
      const newEmailOTP = [...emailOTP];
      newEmailOTP[index] = value;
      setEmailOTP(newEmailOTP);

      // Move to the next input if not the last box
      if (value && index < 5) {
        document.getElementById(`email-otp-${index + 1}`).focus();
      }
    }
  };

  const verifyOTP = async () => {
    const mobileOTPString = mobileOTP.join("");
    const emailOTPString = emailOTP.join("");
  
    if (mobileOTPString.length === 6 && emailOTPString.length === 6) {
      setIsVerifying(true);
      const requestData = {
        phoneNumber: `+${localStorage.getItem("mobileNumber")}`,
        otpCode: mobileOTPString,
        email: localStorage.getItem("email"),
        otpCodeEmail: emailOTPString,
      };
      try {
        const response = await fetch(`${BASIC_URL}/api/otp/verifyOTP`, { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
  
        if (!response.ok) {
          const errorData = await response.text();
          throw new Error(`OTP verification failed: ${errorData}`);
        }
        alert("OTP verification successful!");
      } catch (error) {
        alert(`OTP verification failed. Reason: ${error.message}`);
      } finally {
        setIsVerifying(false);
      }
    }
  };
  

  const handleFinish = async () => {
    const userData = {
      pan: localStorage.getItem("pan"), 
      lastName: localStorage.getItem("lastName"),
      middleName: localStorage.getItem("middleName"),
      firstName: localStorage.getItem("firstName"),
      dateOfBirth: localStorage.getItem("dateOfBirth"),
      gender: localStorage.getItem("gender")?.toUpperCase(),
      residentialStatus: localStorage.getItem("residentialStatus")?.toUpperCase(),
      mobileNumber: localStorage.getItem("mobileNumber"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
      address: {
        country: localStorage.getItem("country"),
        flatOrDoor: localStorage.getItem("flatOrDoor"),
        streetBlock: localStorage.getItem("streetBlock"),
        pincode: localStorage.getItem("pincode"),
        city: localStorage.getItem("city"),
        state: localStorage.getItem("state"),
      },
    };
    
    try {
      
      setIsVerifying(true);
      const response = await fetch(`${BASIC_URL}/api/users/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        
      });
      console.log("Payload Sent to API:", userData);


      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`User registration failed: ${errorData}`);
      }

      const result = await response.json();
      console.log("User saved successfully:", result);
      alert("Registration successful! Redirecting to login page...");
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      alert(`Registration failed. Reason: ${error.message}`);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendOTP = () => {
    alert("Resending OTP...");
  };

  return (
    <div className="otp-page">
      <h1>Enter the OTP</h1>
      <p>
        We have sent a One Time Password (OTP) in a text message (SMS) to your
        primary mobile number +91xxxxxx73 and primary email id
        abc******34@gmail.com
      </p>

      <div className="otp-input-group">
        <label>Mobile OTP *</label>
        <div className="otp-input-container">
          {mobileOTP.map((digit, index) => (
            <input
              key={index}
              id={`mobile-otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index, "mobile")}
            />
          ))}
        </div>
      </div>

      <div className="otp-input-group">
        <label>Email OTP *</label>
        <div className="otp-input-container">
          {emailOTP.map((digit, index) => (
            <input
              key={index}
              id={`email-otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index, "email")}
            />
          ))}
        </div>
      </div>

      <div className="otp-timer">
        <p>Both OTPs expire in 14m:45s</p>
        <p>3 Attempts remaining</p>
      </div>

      <button className="resend-otp-button" onClick={handleResendOTP}>
        Resend OTP (Allowed only once)
      </button>

      <Button className="finish-button" onClick={handleFinish}>
        Finish
      </Button>

      {isVerifying && <p>Processing...</p>}
    </div>
  );
};

export default OTPPage;


