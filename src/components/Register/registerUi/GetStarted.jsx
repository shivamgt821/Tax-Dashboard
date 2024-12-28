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

export default function TaxRegistrationForm() {
  const [pan, setPan] = useState("");
  const [registrationType, setRegistrationType] = useState("taxpayer");

  const isPanValid = pan.trim().length === 10;

  const handleValidate = () => {
    if (!isPanValid) {
      alert("Please enter a valid 10-character PAN.");
    } else {
      alert(`PAN ${pan} validated successfully!`);
    }
  };

  const handleContinue = () => {
    if (!isPanValid) {
      alert("Please validate your PAN to continue.");
    } else {
      alert("Proceeding to the next step...");
    }
  };

  return (
    <Box sx={{backgroundColor: "#f8fafc", padding: 4 }}>
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
        <Typography variant="body2" color="textSecondary"textAlign={"left"} >
          Register and find all your tax data in a single secure platform!{" "}
          {/* <Box textAlign={"right"} marginTop={"20px"}><span style={{ color: "red" }}>*</span> indicates mandatory fields.</Box> */}
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
              // label="Enter your User ID (PAN)"
              value={pan}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
              placeholder="Enter you User id / PAN"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              required
            />
          </Box>

          <Grid container spacing={2} mt={3}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                onClick={handleValidate}
                color="secondary"
                disabled={!isPanValid}
                fullWidth
              >
                Validate
              </Button>
            </Grid>
            <Grid item xs={12}>
            
            </Grid>
           
          </Grid>
        </Box>

        <Typography mt={4} variant="caption" color="textSecondary">
          Valid for: Individuals, Hindu Undivided Families, Companies, Trusts,
          Local Authorities, Artificial Juridical Persons, Firms, Limited
          Liability Partnerships, Associations of Persons, Political Parties,
          Governments, and Bodies of Individuals.
        </Typography>
      </Box>
    </Box>
  );
}
