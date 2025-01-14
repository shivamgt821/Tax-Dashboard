import React, { useState } from "react";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Box,
  Grid,
} from "@mui/material";

export default function TaxRegistrationForm({
  onPanValidation,
  onContinue,
  onBack,
}) {
  const [pan, setPan] = useState("");
  const [panError, setPanError] = useState("");
  const [registrationType, setRegistrationType] = useState("taxpayer");
  const [isValidated, setIsValidated] = useState(false);

  const validatePAN = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  const handleValidate = () => {
    if (!validatePAN(pan)) {
      setPanError("Invalid PAN format. Please enter a valid PAN.");
      onPanValidation(false);
      setIsValidated(false);
    } else {
      setPanError("");
      alert(`PAN ${pan} validated successfully!`);
      onPanValidation(true);
      setIsValidated(true);
    }
  };

  const handleContinue = () => {
    if (isValidated) {
      onContinue({ pan, registrationType });
      localStorage.setItem("penDetails", pan);
    } else {
      alert("Please validate your PAN to continue.");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f8fafc", padding: 4 }}>
      <Box
        sx={{
          maxWidth: 600,
          margin: "auto",
          backgroundColor: "#fff",
          padding: 4,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="body2" color="textSecondary" textAlign={"left"}>
          Register and find all your tax data in a single secure platform!
        </Typography>

        <Box mt={4}>
          <Typography variant="h5" fontWeight="bold" textAlign={"left"}>
            Let&apos;s Get Started
          </Typography>

          <Box mt={2}>
            <Typography variant="body1" gutterBottom textAlign={"left"}>
              Register as
            </Typography>
            <RadioGroup
              value={registrationType}
              onChange={(e) => setRegistrationType(e.target.value)}
              row
            >
              <FormControlLabel
                value="taxpayer"
                control={<Radio />}
                label="Taxpayer"
              />
              <FormControlLabel
                value="others"
                control={<Radio />}
                label="Others"
              />
            </RadioGroup>
          </Box>

          <Box mt={3}>
            <TextField
              fullWidth
              value={pan}
              onChange={(e) => {
                const value = e.target.value.toUpperCase();
                setPan(value);
                if (!validatePAN(value)) {
                  setPanError("Invalid PAN format. Please enter a valid PAN.");
                  setIsValidated(false); 
                } else {
                  setPanError("");
                }
              }}
              placeholder="Enter your User ID / PAN"
              variant="outlined"
              error={!!panError}
              helperText={panError}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Box>

          <Grid container spacing={2} mt={3}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={handleValidate}
                color="secondary"
                disabled={!pan || !!panError}
                fullWidth
              >
                Validate
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Typography mt={4} variant="caption" color="textSecondary">
          Valid for: Individuals, Hindu Undivided Families, Companies, Trusts,
          Local Authorities, Artificial Juridical Persons, Firms, Limited
          Liability Partnerships, Associations of Persons, Political Parties,
          Governments, and Bodies of Individuals.
        </Typography>

        {/* Back and Continue Buttons */}
        <Grid container justifyContent="space-between" sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            onClick={onBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleContinue}
            disabled={!isValidated} 
          >
            Continue
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}
