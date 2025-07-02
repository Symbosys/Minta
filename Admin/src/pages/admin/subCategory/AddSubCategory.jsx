import { Grid, TextField, MenuItem, InputLabel, Select, FormControl, Button, Card, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import React from 'react'

function AddSubCategory() {

  const [gender, setGender] = React.useState("");
  const [avatar, setAvatar] = React.useState(null);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFileChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  return (
    <Container maxWidth="sm" >
      <Card className="p-3 mt-5">

        <Grid container spacing={2}>
        
           <Grid item xs={12} sm={6}>
                      <FormControl variant="filled" fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select value={gender} onChange={handleGenderChange}>
                          <MenuItem value="male">Chicken</MenuItem>
                          <MenuItem value="female">Fish</MenuItem>
                          <MenuItem value="other">Meat</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="Title" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField label="Description" variant="filled" fullWidth multiline rows={4} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button variant="outlined" component="label" fullWidth >
              Upload Image
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {avatar && <p>Selected File: {avatar.name}</p>}
          </Grid>
        
          <Grid item xs={12} sm={5}>
</Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" component="label" startIcon={<AddIcon />}>
              Create
            </Button>
          </Grid>
        </Grid>



      </Card>
    </Container>
  )
}

export default AddSubCategory
