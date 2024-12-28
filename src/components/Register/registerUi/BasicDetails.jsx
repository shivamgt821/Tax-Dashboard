import React, { useState, useEffect } from 'react';
import { Box, TextField, Grid, Typography, MenuItem } from '@mui/material';

function BasicDetails({ onNext }) {
  const [formFilled, setFormFilled] = useState(false);
  
  // Check if the form is filled, you can add your own validation here
  useEffect(() => {
    const checkForm = () => {
      // If all required fields are filled, trigger onNext
      setFormFilled(true); // You can customize this logic further
    };
    checkForm();
  }, []);

  useEffect(() => {
    if (formFilled) {
      onNext(); // Automatically move to next step when form is filled
    }
  }, [formFilled, onNext]);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Basic Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="PAN"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Middle Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Gender"
            variant="outlined"
            required
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Transgender">Transgender</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Residential Status"
            variant="outlined"
            required
          >
            <MenuItem value="Resident">Resident</MenuItem>
            <MenuItem value="Non Resident">Non Resident</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BasicDetails;
