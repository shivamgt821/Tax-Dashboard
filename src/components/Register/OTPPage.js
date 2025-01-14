// import React, { useState } from "react";
// import "./OTPPage.css"; // Assume you have a CSS file for styling

// const OTPPage = () => {
//   const [mobileOTP, setMobileOTP] = useState(["", "", "", "", "", ""]);
//   const [emailOTP, setEmailOTP] = useState(["", "", "", "", "", ""]);

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

//       if (value && index < 5) {
//         document.getElementById(`email-otp-${index + 1}`).focus();
//       }
//     }
//   };

//   const onComplete = () => {
//     // Retrieve data from localStorage
//     const retrievedDetails = {
//       pan: localStorage.getItem("pan"),
//       lastName: localStorage.getItem("lastName"),
//       middleName: localStorage.getItem("middleName"),
//       firstName: localStorage.getItem("firstName"),
//       dob: localStorage.getItem("dob"),
//       gender: localStorage.getItem("gender"),
//       residentialStatus: localStorage.getItem("residentialStatus"),
//       mobileNumber: localStorage.getItem("mobileNumber"),
//       email: localStorage.getItem("email"),
//       address: {
//         country: localStorage.getItem("country"),
//         flat: localStorage.getItem("flat"),
//         street: localStorage.getItem("street"),
//         pincode: localStorage.getItem("pincode"),
//         city: localStorage.getItem("city"),
//         state: localStorage.getItem("state"),
//       },
//     };

//     console.log("Retrieved Basic Details:", retrievedDetails);

//     // Save the entire object back into localStorage as a single entry
//     localStorage.setItem(
//       "CompleteBasicDetails",
//       JSON.stringify(retrievedDetails)
//     );

//     // Validate OTPs
//     if (mobileOTP.join("").length === 6 && emailOTP.join("").length === 6) {
//       console.log("OTP process completed");
//     } else {
//       alert("Please complete both OTPs before finishing.");
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
//         Primary mobile number 91xxxxxx73 and primary email id
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

//       {/* <button
//         className="finish-button"
//         onClick={() => {
//           if (
//             mobileOTP.join("").length === 6 &&
//             emailOTP.join("").length === 6
//           ) {
//             onComplete();
//             const getBasicDetails = localStorage.getItem("BasicDetails");
//             console.log("Get data from get started", getBasicDetails);
//           } else {
//             alert("Please complete both OTPs before finishing.");
//           }
//         }}
//       >
//         Finish
//       </button> */}
//     </div>
//   );
// };

// export default OTPPage;

import React, { useState } from "react";
import "./OTPPage.css"; // Assume you have a CSS file for styling

const OTPPage = () => {
  const [mobileOTP, setMobileOTP] = useState(["", "", "", "", "", ""]);
  const [emailOTP, setEmailOTP] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false); // To handle API call state

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

      // If this is the last digit of the email OTP, trigger API call
      if (value && index === 5) {
        verifyOTP(mobileOTP, newEmailOTP);                                                             //
      }
    }
  };

  // const verifyOTP = async (mobileOTPArray, emailOTPArray) => {

  //   const mobileOTPString = mobileOTPArray.join("");
  //   const emailOTPString = emailOTPArray.join("");
  
  //   if (mobileOTPString.length === 6 && emailOTPString.length === 6) {
  //     setIsVerifying(true);
  
  //     const retrievedDetails = {
  //       mobileNumber: localStorage.getItem("mobileNumber"),
  //       email: localStorage.getItem("email"),
  //     };
  
  //     const requestData = {
  //       phoneNumber: retrievedDetails.mobileNumber,
  //       otpCode: mobileOTPString,
  //       email: retrievedDetails.email,
  //       otpCodeEmail: emailOTPString,
  //     };
  
  //     console.log("Request Payload", requestData); // Debugging log
  
  //     try {
  //       const response = await fetch("http://localhost:8080/api/otp/verifyOTP", {                        //
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(requestData),
  //       });
  
  //       console.log("API Response Status:", response.status); // Debugging log
  //       if (!response.ok) {
  //         const errorData = await response.text();
  //         throw new Error(`OTP verification failed: ${errorData}`);
  //       }
  
  //       const result = await response.json();
  //       console.log("Verification Success:", result);
  //       alert("OTP verification successful!");
  //     } catch (error) {
  //       console.error("Error during OTP verification:", error);
  //       alert("OTP verification failed. Please try again.");
  //     } finally {
  //       setIsVerifying(false);
  //     }
  //   } else {
  //     alert("Please complete both OTPs before verification.");
  //   }
  // };
  

  const verifyOTP = async (mobileOTPArray, emailOTPArray) => {
    const mobileOTPString = mobileOTPArray.join("");
    const emailOTPString = emailOTPArray.join("");
    
    if (mobileOTPString.length === 6 && emailOTPString.length === 6) {
      setIsVerifying(true);
  
      const mobileNumber = localStorage.getItem("mobileNumber");
      const email = localStorage.getItem("email");
  
      if (!mobileNumber || !email) {
        alert("Missing required data from localStorage.");
        setIsVerifying(false);
        return;
      }
  
      const requestData = {
        phoneNumber: mobileNumber,
        otpCode: mobileOTPString,
        email: email,
        otpCodeEmail: emailOTPString,
      };
  
      console.log("Request Payload:", requestData);
  
      try {
        const response = await fetch("http://localhost:8080/api/otp/verifyOTP", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
  
        if (!response.ok) {
          const errorData = await response.text();
          console.log("API Error Response:", errorData);
         throw new Error(`OTP verification failed: ${errorData}`);
        }
  
        const result = await response.json();
        console.log("Verification Success:", result);
        alert("OTP verification successful!");
      } catch (error) {
        console.error("Error during OTP verification:", error);
        alert("OTP verification failed. Please try again.");
      } finally {
        setIsVerifying(false);
      }
    } else {
      alert("Please complete both OTPs before verification.");
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
        Primary mobile number 91xxxxxx73 and primary email id
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
              onChange={(e) => handleInputChange(e, index, "email")}                                // 
            />
          ))}
        </div>
      </div>

      <div className="otp-timer">
        <p>Both OTP expires in 14m:45s</p>
        <p>3 Attempts remaining</p>
      </div>

      <button className="resend-otp-button" onClick={handleResendOTP}>
        Resend OTP (Allowed only once)
      </button>

      <p className="note">
        Note: You can go back and update your details if required.
      </p>

      {isVerifying && <p>Verifying OTPs...</p>}
    </div>
  );
};

export default OTPPage;

