import { Grid, TextField, MenuItem, InputLabel, Select, FormControl, Button, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import React from 'react'

function Add() {

  const [gender, setGender] = React.useState("");
  const [avatar, setAvatar] = React.useState(null);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFileChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  return (
    <div>
      <Card className="p-3 mt-5">

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email Id" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Contact Number" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="New Password" variant="filled" fullWidth />
          </Grid>    <Grid item xs={12} sm={6}>
            <TextField label="Re - Password" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="filled" fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select value={gender} onChange={handleGenderChange}>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" component="label" >
              Upload Avatar
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {avatar && <p>Selected File: {avatar.name}</p>}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" component="label" startIcon={<AddIcon />}>
              Create
            </Button>
          </Grid>
        </Grid>



      </Card>
    </div>
  )
}

export default Add
