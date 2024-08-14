import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

function CreateOwner({ open, onClose }) {
  const [ownerData, setOwnerData] = useState({
    email: '',
    location: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    setOwnerData({
      ...ownerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/owners', ownerData)
      .then(() => {
        alert('Owner created successfully');
        setOwnerData({ email: '', location: '', phoneNumber: '', password: '' });
        onClose();
      })
      .catch(error => console.error(error));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Owner</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          value={ownerData.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="location"
          label="Location"
          type="text"
          fullWidth
          value={ownerData.location}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="phoneNumber"
          label="Phone Number"
          type="tel"
          fullWidth
          value={ownerData.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="password"
          label="Password"
          type="password"
          fullWidth
          value={ownerData.password}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateOwner;
