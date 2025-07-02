import React from 'react';
import { Card, Table, TableHead, TableRow, TableCell, TableBody, Avatar, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton, Switch } from '@mui/material';
import { Grid, TextField, MenuItem, InputLabel, Select, FormControl, InputAdornment } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

import { green, red } from '@mui/material/colors';
const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', avatar: 'https://avatars.githubusercontent.com/u/94299395?v=4&size=64', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', avatar: 'https://avatars.githubusercontent.com/u/94299395?v=4&size=64', status: 'Inactive' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com', phone: '456-789-1234', avatar: 'https://avatars.githubusercontent.com/u/94299395?v=4&size=64', status: 'Active' },
    { id: 4, name: 'Bob Martin', email: 'bob@example.com', phone: '321-654-9870', avatar: 'https://avatars.githubusercontent.com/u/94299395?v=4&size=64', status: 'Pending' },
    { id: 4, name: 'Bob Martin', email: 'bob@example.com', phone: '321-654-9870', avatar: 'https://avatars.githubusercontent.com/u/94299395?v=4&size=64', status: 'Pending' },
    { id: 4, name: 'Bob Martin', email: 'bob@example.com', phone: '321-654-9870', avatar: 'https://avatars.githubusercontent.com/u/94299395?v=4&size=64', status: 'Pending' },
    { id: 4, name: 'Bob Martin', email: 'bob@example.com', phone: '321-654-9870', avatar: 'https://avatars.githubusercontent.com/u/94299395?v=4&size=64', status: 'Pending' },
];

function View() {
    const [gender, setGender] = React.useState("");
    const [filter, setFilter] = React.useState("");
    const [avatar, setAvatar] = React.useState(null);
    const [edit, setEdit] = React.useState(false);


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
                        <Select value={filter} onChange={handleGenderChange} >
                            <MenuItem value="male">Active</MenuItem>
                            <MenuItem value="female">Inactive</MenuItem>
                            <MenuItem value="other">Pending</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="outlined-basic"
                        label="Search By Number.."
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
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Email</strong></TableCell>
                            <TableCell><strong>Phone Number</strong></TableCell>
                            <TableCell><strong>Avatar</strong></TableCell>
                            <TableCell><strong>Status</strong></TableCell>
                            <TableCell><strong>Action</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.phone}</TableCell>
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

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEdit(!edit)}>cancle</Button>
                    <Button onClick={() => setEdit(!edit)} autoFocus>
                        Save Changes
                    </Button>
                </DialogActions>
            </Dialog>
            <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
        </Card>
    );
}

export default View;