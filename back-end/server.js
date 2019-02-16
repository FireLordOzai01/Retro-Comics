const express = require('express');
const usersRoutes = require('./routes/users-route');
const booksRoutes = require('./routes/books-route');
const featuredRoutes = require('./routes/featuredBooks-route');
const cors = require('cors');

const app = express();
const port = 5000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));

require('dotenv').load();
require('./config/db')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', usersRoutes);
app.use('/books', booksRoutes);
app.use('/featuredBooks', featuredRoutes);

module.exports = app;