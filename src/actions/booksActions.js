import axios from 'axios';

// const getBooks = () => ({
//   type: 'GET_BOOKS',
// });
const getBooks = () => {
  return function(dispatch) {
    axios.get('/api/books')
      .then(function(response){
        dispatch({ type: 'GET_BOOKS', payload: response.data })
      })
      .catch(function(err){
        dispatch({ type: 'GET_BOOKS_REJECTED', payload: err })
      });
  };
};

// const postBook = books => ({
//   type: 'POST_BOOK',
//   payload: books,
// });
const postBook = books => {
  return function(dispatch) {
    axios.post('/api/books', books)
      .then(function(response){
        dispatch({ type: 'POST_BOOK', payload: response.data })
      })
      .catch(function(err){
        dispatch({ type: 'POST_BOOK_REJECTED', payload: err })
      });
  };
};

// const deleteBook = _id => ({
//   type: 'DELETE_BOOK',
//   _id,
// });
const deleteBook = _id => {
  return function(dispatch) {
    axios.delete(`/api/books/${_id}`)
      .then(function (response) {
        dispatch({ type: 'DELETE_BOOK', payload: _id })
      })
      .catch(function (err) {
        dispatch({ type: 'DELETE_BOOK_REJECTED', payload: err })
      });
  };
};

const updateBook = book => ({
  type: 'UPDATE_BOOK',
  payload: book,
});

module.exports = {
  getBooks,
  postBook,
  deleteBook,
  updateBook,
};
