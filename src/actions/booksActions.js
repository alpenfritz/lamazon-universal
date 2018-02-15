const getBooks = () => ({
  type: 'GET_BOOKS',
});

const postBook = books => ({
  type: 'POST_BOOK',
  payload: books,
});

const deleteBook = id => ({
  type: 'DELETE_BOOK',
  id,
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
