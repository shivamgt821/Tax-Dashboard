import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Tabs,
  Tab,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import BasicDetails from "../BasicDetails";
import ContactDetails from "../ContactDetails";
import TaxRegistrationForm from "./GetStarted";

function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const [tabValue, setTabValue] = useState(0);

  const steps = [
    "Get Started",
    "Fill Details",
    "Verify Details",
    "Secure Your Account",
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const moveToNextTab = () => {
    setTabValue((prev) => prev + 1); // Move to the next tab
  };

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Box sx={{ width: "100%", maxWidth: 600, margin: "auto" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <Box sx={{ mt: 4 }}>
            <TaxRegistrationForm />
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="registration tabs"
            ></Tabs>

            {tabValue === 0 && (
              <Box sx={{ mt: 2 }}>
                {/* Add PAN field and Validate button here */}
              </Box>
            )}
          </Box>
        )}

        {activeStep === 1 && (
          <Box sx={{ mt: 4 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="details tabs"
            >
              <Tab label="Basic Details" />
              <Tab label="Contact Details" />
            </Tabs>

            {tabValue === 0 && <BasicDetails onNext={moveToNextTab} />}
            {tabValue === 1 && <ContactDetails />}
          </Box>
        )}

        {activeStep === 2 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Verify Details</Typography>
          </Box>
        )}

        {activeStep === 3 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Secure Your Account</Typography>
          </Box>
        )}

        <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
          <Button
            variant="outlined"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => prev - 1)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={() => setActiveStep((prev) => prev + 1)}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Continue"}
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

export default Register;
