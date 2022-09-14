const router = require('express').Router();

const authenticate = require('../middleware/authenticate');
const bookController = require('../controllers/book.controller');

// GET root/api/books
// Get all books in the database.
router.get('/', bookController.getAllBooks);

// DELETE root/api/books/:id
// Delete a single book from the database.
// TODO: Add authentication middleware.
router.delete('/:id', bookController.deleteBook);

// POST root/api/books
// Add a single book to the database.
// TODO: Add authentication middleware.
router.post('/', bookController.addBook);

// PUT root/api/books/:id
// Edit a single book in the database.
// TODO: Add authentication middleware.
router.put('/:id', bookController.updateBook);

module.exports = router;