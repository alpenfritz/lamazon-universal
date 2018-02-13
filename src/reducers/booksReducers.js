const defaultState = [
  {
    id: 1,
    title: 'First Book',
    price: 11,
  },
  {
    id: 2,
    title: 'Second Book',
    price: 22,
  },
];

const booksReducers = (state = { books: defaultState }, action) => {
  switch (action.type) {
    case 'GET_BOOKS': {
      const newState = { ...state, books: [...state.books] };
      return newState;
    }
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
