import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Grid, Card, Button } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";

function AddCoupon() {

  const [avatar, setAvatar] = useState(null);
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

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField className="pb-2" label="Coupon Code" variant="filled" fullWidth name="code" value={coupon.code} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField className="pb-2" label="Discount Amount" variant="filled" fullWidth type="number" name="discount" value={coupon.discount} onChange={handleChange} required />
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
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" component="label" >
              Upload Avatar
              <input type="file" hidden />
            </Button>
            {avatar && <p>Selected File: {avatar.name}</p>}          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" component="label" startIcon={<AddIcon />}>
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}

export default AddCoupon;