const postBook = books => ({
  type: 'POST_BOOK',
  payload: books,
});

const deleteBook = id => ({
  type: 'DELETE_BOOK',
  payload: id,
});

const updateBook = book => ({
  type: 'UPDATE_BOOK',
  payload: book,
});

module.exports = {
  postBook,
  deleteBook,
  updateBook,
};
