const axios = require('axios');

const GBS_API_KEY = process.env.GBS_API_KEY || require('../keys.json').GBS_API_KEY;

module.exports.getTop3GBSResultsByISBN = (req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.query}&key=${GBS_API_KEY}`)
        .then((results) => {
            results = JSON.parse(JSON.stringify(results.data));

            let foundBooks = results.items;
            if (foundBooks.length > 10) foundBooks = foundBooks.slice(0, 10);

            let booksDto = [];
            for (let book of foundBooks) {
                booksDto.push({
                    title: (book.volumeInfo.title ? book.volumeInfo.title : ''),
                    author: ((book.volumeInfo.authors && book.volumeInfo.authors[0]) ? book.volumeInfo.authors[0] : ''),
                    genre: ((book.volumeInfo.categories && book.volumeInfo.categories[0]) ? book.volumeInfo.categories[0] : ''),
                    description: (book.volumeInfo.description ? book.volumeInfo.description : ''),
                    isbn: ((book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers[0].identifier) ? book.volumeInfo.industryIdentifiers[0].identifier : 0),
                    suggestedPrice: ((book.saleInfo.retailPrice && book.saleInfo.retailPrice.amount) ? book.saleInfo.retailPrice.amount : 0),
                    thumbnailUrl: ((book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) ? book.volumeInfo.imageLinks.thumbnail/*.replace('zoom=1', 'zoom=2')*/ : 'http://books.google.com/books/content?id=rbQ4MAEACAAJ&printsec=frontcover&img=1&zoom=3&source=gbs_api')
                });
            }

            res.status(200).json({
                message: 'Fetched books.',
                count: booksDto.length,
                books: booksDto
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
};