const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API
const Books = require('./db/books');

mongoose.connect('mongodb://localhost:27017/bookshop');

// API-GET
app.get('/api/books', (request, response) => {
  // mongoose
  Books.find((err, books) => {
    if (err) {
      throw err;
    }
    return response.json(books);
  });
});

// API-POST
app.post('/api/books', (request, response) => {
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
app.delete('/api/books/:_id', (request, response) => {
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
app.put('/api/books/:_id', (request, response) => {
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


// main route
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// catch 404 and forward to error handler
app.use((request, response, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, request, response, next) => {
  // set locals, only providing error in development
  response.locals.message = err.message;
  response.locals.error = request.app.get('env') === 'development' ? err : {};

  // render the error page
  response.status(err.status || 500);
  response.render('error');
});

module.exports = app;
