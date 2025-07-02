import React, { useState } from 'react';
import { Card, Grid, FormControl, InputLabel, Select, MenuItem, TextField, InputAdornment, IconButton, Table, TableHead, TableRow, TableCell, TableBody, Avatar, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';

function ManageCoupon() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [edit, setEdit] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const rows = [
    { id: 1, name: 'Coupon 1', valid: "02/03/2025", expire: "02/03/2025", avatar: '', status: 'Active' },
    { id: 2, name: 'Coupon 2', valid: "02/03/2025", expire: "02/03/2025", avatar: '', status: 'Inactive' },
    { id: 2, name: 'Coupon 2', valid: "02/03/2025", expire: "02/03/2025", avatar: '', status: 'Inactive' },
    { id: 2, name: 'Coupon 2', valid: "02/03/2025", expire: "02/03/2025", avatar: '', status: 'Active' },
    { id: 2, name: 'Coupon 2', valid: "02/03/2025", expire: "02/03/2025", avatar: '', status: 'Inactive' },
    { id: 2, name: 'Coupon 2', valid: "02/03/2025", expire: "02/03/2025", avatar: '', status: 'Inactive' },
    { id: 2, name: 'Coupon 2', valid: "02/03/2025", expire: "02/03/2025", avatar: '', status: 'Active' },
    { id: 2, name: 'Coupon 2', valid: "02/03/2025", expire: "02/03/2025", avatar: '', status: 'Inactive' },
    { id: 2, name: 'Coupon 2', valid: "02/03/2025", expire: "02/03/2025", avatar: '', status: 'Active' },
  ];

  const handleFileChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const [coupon, setCoupon] = useState({
    code: '',
    discount: '',
    userSpecific: false,
    userId: '',
    quantity: 1,
    validFrom: '',
    expireDate: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCoupon({
      ...coupon,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Coupon Data:', coupon);
  };

  return (
    <Card className="p-3 mt-5">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Filter</InputLabel>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
              <MenuItem value="Pending">Expire</MenuItem>
              <MenuItem value="Pending">Valid </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={7}>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Search By Title.."
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Card className="mt-5" sx={{ maxHeight: 500, overflowY: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell><strong>Sno.</strong></TableCell>
              <TableCell><strong>Title</strong></TableCell>
              <TableCell><strong>Valid from</strong></TableCell>
              <TableCell><strong>Expire Date</strong></TableCell>
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
                <TableCell>{row.valid}</TableCell>
                <TableCell>{row.expire}</TableCell>
                <TableCell><Avatar src={row.avatar} alt={row.name} /></TableCell>
                <TableCell sx={{ color: row.status === 'Active' ? 'green' : 'red' }}>{row.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" startIcon={<EditIcon />} onClick={() => setEdit(true)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={edit} >
        <DialogTitle>Coupon Update</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Coupon Code" variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Discount Amount" variant="filled" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className="pb-2" variant="filled" fullWidth>
                <InputLabel>User-Specific</InputLabel>
                <Select name="userSpecific" value={coupon.userSpecific} onChange={handleChange}>
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {coupon.userSpecific && (
              <Grid item xs={12} sm={6}>
                <TextField className="pb-2" label="User ID" variant="filled" fullWidth name="userId" value={coupon.userId} onChange={handleChange} required={coupon.userSpecific} />
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              <TextField className="pb-2" label="Quantity" variant="filled" fullWidth type="number" name="quantity" value={coupon.quantity} onChange={handleChange} min="1" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField className="pb-2" label="Valid From" variant="filled" fullWidth type="date" name="validFrom" value={coupon.validFrom} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField className="pb-2" label="Expire Date" variant="filled" fullWidth type="date" name="expireDate" value={coupon.expireDate} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
            </Grid>

          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEdit(false)}>Cancel</Button>
          <Button onClick={() => setEdit(false)} autoFocus>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default ManageCoupon;
