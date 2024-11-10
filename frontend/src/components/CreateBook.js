import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

function CreateBook({ open, onClose }) {
  const [bookData, setBookData] = useState({
    bookNumber: 0,
    bookName: '',
    status: '',
    price: '',
  });

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.name === 'bookNumber' ? Number(e.target.value) : e.target.name === 'price' ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = () => {
    const bookId = Math.random().toString;
    bookData.id = bookId; 
    axios.post('http://localhost:5000/api/books', bookData)
      .then(() => {
        alert('Book created successfully');
        setBookData({ bookNumber: 0, bookName: '', status: '', price: '' });
        onClose();
      })
      .catch(error => console.error(error));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Book</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="bookNumber"
          label="Book Number"
          type="number"
          fullWidth
          value={bookData.bookNumber}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="bookName"
          label="Book Name"
          type="text"
          fullWidth
          value={bookData.bookName}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="status"
          label="Status"
          type="text"
          fullWidth
          value={bookData.status}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="price"
          label="Price"
          type="number"
          fullWidth
          value={bookData.price}
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

export default CreateBook;
