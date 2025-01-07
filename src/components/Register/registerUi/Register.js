import React, { useState } from "react";

// Original and old 
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import BasicDetails from "../BasicDetails";
import TaxRegistrationForm from "./GetStarted";
import OTPPage from "../OTPPage";
import { useNavigate } from "react-router-dom";

function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPanValidated, setIsPanValidated] = useState(false); 
    const [registrationData, setRegistrationData] = useState({});

  
  const navigate = useNavigate();

  const steps = ["Get Started", "Fill Details", "Verify Details"];

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate("/login");
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1.5em 0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
          padding: 3,
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <Box sx={{ mt: 4 }}>
            <TaxRegistrationForm
              onPanValidation={setIsPanValidated}
              onContinue={(data) => {
                setRegistrationData((prev) => ({ ...prev, ...data }));
                handleNext();
              }}
            />
          </Box>
        )}

        {activeStep === 1 && (
          <Box sx={{ mt: 4 }}>
            <BasicDetails
              initialData={registrationData}
              onContinue={(data) => {
                setRegistrationData((prev) => ({ ...prev, ...data }));
                handleNext();
              }}
            />
          </Box>
        )}

        {activeStep === 2 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Verify Details
            </Typography>
            <OTPPage
              registrationData={registrationData}
              onVerify={() => handleNext()}
            />
          </Box>
        )}

        <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!isPanValidated && activeStep === 0}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Continue"}
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

export default Register;
