import React, { useState } from 'react';
import CreateOwner from '../components/CreateOwner';
import OwnerList from '../components/OwnerList';
import Button from '@mui/material/Button';

function OwnersPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Create Owner</Button>
      <CreateOwner open={open} onClose={handleClose} />
      <OwnerList />
    </div>
  );
}

export default OwnersPage;
