import React, { useState } from 'react';
import { Card, Table, TableHead, TableRow, TableCell, TableBody, Avatar, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton } from '@mui/material';
import { Grid, TextField, MenuItem, InputLabel, Select, FormControl, InputAdornment } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

function ManageSubCategory() {

  const [filter,SetFilter] = useState("")
      const [edit, setEdit] = React.useState(false);
    const [avatar, setAvatar] = React.useState(null);
    // const [filter, setFilter] = React.useState(null);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFileChange = (event) => {
    setAvatar(event.target.files[0]);
  };
  
  return (
    <Card className="p-3 mt-5">

      <Grid container spacing={3} className="">
        <Grid item xs={3} sm={9}>
          <FormControl variant="standard" >
            <InputLabel>Filter</InputLabel>
            <Select value={filter} onChange={()=>{  }} >
              <MenuItem value="male">Active</MenuItem>
              <MenuItem value="female">Inactive</MenuItem>
              <MenuItem value="other">Pending</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="outlined-basic"
            label="Search By Title.."
            variant="outlined"

            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => { }} edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Card className=" mt-5" sx={{ maxHeight: 500, overflowY: 'auto' }}>
        <Table stickyHeader sx={{ paddingTop: "0px" }}>
          <TableHead>
            <TableRow>
              <TableCell><strong>Sno.</strong></TableCell>
              <TableCell><strong>Category</strong></TableCell>
              <TableCell><strong>Sub Category</strong></TableCell>
              <TableCell><strong>Image</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Avatar src={row.avatar} alt={row.name} />
                </TableCell>
                <TableCell sx={{
                  color: row.status === "Active" ? "green" : "red"
                }}>{row.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" startIcon={<EditIcon />} onClick={() => setEdit(!edit)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog
        open={edit}
        // onClose={()=>setEdit(!edit)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Profile Update"}
        </DialogTitle>
        <DialogContent>


          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <FormControl variant="filled" fullWidth>
                <InputLabel>Category</InputLabel>
                <Select >
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
           
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEdit(!edit)}>cancle</Button>
          <Button onClick={() => setEdit(!edit)} autoFocus>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default ManageSubCategory


const rows = [
  { id: 1, name: 'John Doe', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGAFtAnliYM6Tg0pR75aE2uXYai4TgeCsAQ&s', status: 'Active' },
  { id: 2, name: 'Jane Smith', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGAFtAnliYM6Tg0pR75aE2uXYai4TgeCsAQ&s', status: 'Inactive' },
  { id: 3, name: 'Alice Brown',  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGAFtAnliYM6Tg0pR75aE2uXYai4TgeCsAQ&s', status: 'Active' },
  { id: 4, name: 'Bob Martin', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGAFtAnliYM6Tg0pR75aE2uXYai4TgeCsAQ&s', status: 'Pending' },
  { id: 4, name: 'Bob Martin', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGAFtAnliYM6Tg0pR75aE2uXYai4TgeCsAQ&s', status: 'Pending' },
  { id: 4, name: 'Bob Martin', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGAFtAnliYM6Tg0pR75aE2uXYai4TgeCsAQ&s', status: 'Pending' },
  { id: 4, name: 'Bob Martin', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGAFtAnliYM6Tg0pR75aE2uXYai4TgeCsAQ&s', status: 'Pending' },
];