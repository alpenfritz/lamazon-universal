const booksReducers = (state = { books: [] }, action) => {
  switch (action.type) {
    case 'POST_BOOK': {
      const newState = {
        books: [
          ...state.books,
          ...action.payload,
        ],
      };
      return newState;
    }
    case 'DELETE_BOOK': {
      const allBooks = [...state.books];
      const idxDelete = allBooks.findIndex(book => book.id === action.payload.id);
      const newState = {
        books: [
          ...allBooks.slice(0, idxDelete),
          ...allBooks.slice(idxDelete + 1),
        ],
      };
      return newState;
    }
    case 'UPDATE_BOOK': {
      const allBooks = [...state.books];
      const idxUpdate = allBooks.findIndex(book => book.id === action.payload.id);
      allBooks[idxUpdate] = action.payload;
      const newState = { books: allBooks };
      return newState;
    }
    default:
      return state;
  }
};

export default booksReducers;
