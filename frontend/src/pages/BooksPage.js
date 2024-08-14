import React, { useState } from 'react';
import CreateBook from '../components/CreateBook';
import BookList from '../components/BookList';
import Button from '@mui/material/Button';

function BooksPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Create Book</Button>
      <CreateBook open={open} onClose={handleClose} />
      <BookList />
    </div>
  );
}

export default BooksPage;
