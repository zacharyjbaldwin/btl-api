const Book = require('../models/book.model');

module.exports.addBook = (req, res) => {
    if (!req.body.title || !req.body.author || !req.body.isbn13 || !req.body.summary
        || !req.body.genre || !req.body.price || !req.body.quantityInStock || !req.body.imageUrl) {
            return res.status(400).json({
                error: 'Bad request.'
            });
        }

    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        isbn13: req.body.isbn13,
        summary: req.body.summary,
        genre: req.body.genre,
        price: req.body.price,
        quantityInStock: req.body.quantityInStock,
        imageUrl: req.body.imageUrl,
    });

    book.save()
        .then((book) => {
            res.status(201).json({
                message: 'Added book',
                book: book
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Failed to add book.',
                error: error
            });
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
