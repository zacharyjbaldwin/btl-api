const Book = require('../models/book.model');

module.exports.addBook = (req, res) => {
    res.status(501).json({
        message: 'Not implemented.'
    });
};

module.exports.getAllBooks = (req, res) => {
    Book.find({})
        .then((books) => {
            res.status(200).json({
                message: 'Fetched all books.',
                count: books.length,
                books: books
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Internal error.',
                error: error
            })
        })
};
