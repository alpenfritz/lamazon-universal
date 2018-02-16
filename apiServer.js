const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// API
const Books = require('./db/books'); // DB Schema

mongoose.connect('mongodb://localhost:27017/bookshop');

// API-GET
app.get('/books', (request, response) => {
  // mongoose
  Books.find((err, books) => {
    if (err) {
      throw err;
    }
    return response.json(books);
  });
});

// API-POST
app.post('/books', (request, response) => {
  const book = request.body;

  // mongoose
  Books.create(book, (err, books) => {
    if (err) {
      throw err;
    }
    return response.json(books);
  });
});

// API-DELETE
app.delete('/books/:_id', (request, response) => {
  const query = { _id: request.params._id };

  // mongoose
  Books.remove(query, (err, books) => {
    if (err) {
      throw err;
    }
    return response.json(books);
  });
});

// API-UPDATE (PUT)
app.put('/books/:_id', (request, response) => {
  const book = request.body;
  const query = { _id: request.params._id };
  // overwrite, otherwise $set will create a new entry
  const update = {
    $set: {
      title: book.title,
      image: book.image,
      price: book.price,
    },
  };
  // set new to true, so that we get the updated document
  const options = { new: true };

  // mongoose
  Books.findOneAndUpdate(query, update, options, (err, books) => {
    if (err) {
      throw err;
    }
    return response.json(books);
  });
});

// API Server Setup
app.listen(3001, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log('API Server is listening on Port: 3001');
});
