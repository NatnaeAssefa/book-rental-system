const express = require('express');
const { createBook, getBooks, deleteBook } = require('../controllers/bookController');

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);
router.delete('/:id', deleteBook);

module.exports = router;
