import React, { useState } from 'react';
import CreateUser from '../components/CreateUser';
import UserList from '../components/UsersList';
import Button from '@mui/material/Button';

function UsersPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" style={{ alignSelf: "end" }} onClick={handleOpen}>Create User</Button>
      <CreateUser open={open} onClose={handleClose} />
      <UserList />
    </div>
  );
}

export default UsersPage;
