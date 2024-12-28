import React from "react";
import { Box, TextField, Grid, Typography, MenuItem } from "@mui/material";

function ContactDetails() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Contact Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Primary Mobile Number"
            variant="outlined"
            required
          />
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Primary Email ID"
            variant="outlined"
            required
          />
        </Grid>
      
        
        <Grid item xs={12}>
          <Typography variant="subtitle1">Postal Address Details</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Flat/Door/Building"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Road/Street/Block/Sector"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Pincode" variant="outlined" required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Post Office" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Area/Locality" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Town/City/District"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth select label="State" variant="outlined" required>
            <MenuItem value="State1">State1</MenuItem>
            <MenuItem value="State2">State2</MenuItem>
            {/* Add more states as needed */}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactDetails;
