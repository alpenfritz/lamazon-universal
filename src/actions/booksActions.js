import axios from 'axios';

const getBooks = () => ({
  type: 'GET_BOOKS',
});

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
        dispatch({ type: 'POST_BOOK_REJECTED', payload: 'POST error'})
      });
  };
};

const deleteBook = _id => ({
  type: 'DELETE_BOOK',
  _id,
});

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
