const router = require('express').Router();

const authenticate = require('../middleware/authenticate');
const bookController = require('../controllers/book.controller');

// GET root/api/books
// Get all books in the database.
router.get('/', bookController.getAllBooks);

// POST root/api/books
// Add a single book to the database.
// TODO: Add authenticate middleware.
router.post('/', bookController.addBook);

module.exports = router;