import axios from 'axios';

// GET BOOKS
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

// POST BOOK
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

// DELETE BOOK
const deleteBook = _id => {
  return function(dispatch) {
    axios.delete(`/api/books/${_id}`)
      .then(function (response) {
        dispatch({ type: 'DELETE_BOOK', _id })
      })
      .catch(function (err) {
        dispatch({ type: 'DELETE_BOOK_REJECTED', payload: err })
      });
  };
};

// UPDATE BOOKS
const updateBook = book => ({
  type: 'UPDATE_BOOK',
  payload: book,
});

// RESET FORM
const resetForm = () => ({
  type: 'RESET_FORM',
});

module.exports = {
  getBooks,
  postBook,
  deleteBook,
  updateBook,
  resetForm,
};
