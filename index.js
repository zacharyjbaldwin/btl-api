const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const MONGO_DB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING || require('./keys.json').MONGO_DB_CONNECTION_STRING;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(morgan('combined'));

mongoose.connect(MONGO_DB_CONNECTION_STRING)
    .then(() => console.log('Connected to MongoDB'))
    .catch(() => {
        console.log('Failed to connect to MongoDB')
        process.exit(1);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Wish, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/', require('./routes/example.routes'));

app.listen(PORT, console.log(`Listening on port ${PORT}...`));