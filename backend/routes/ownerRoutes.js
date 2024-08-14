const express = require('express');
const { createOwner, getOwners, deleteOwner } = require('../controllers/ownerController');

const router = express.Router();

router.post('/', createOwner);
router.get('/', getOwners);
router.delete('/:id', deleteOwner);

module.exports = router;
