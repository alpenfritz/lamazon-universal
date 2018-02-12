import { createStore } from 'redux';

const postBook = () => ({
  type: 'POST_BOOK',
  payload: {
    id: 1,
    title: 'JavaScript Awesome',
    price: 10,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'POST_BOOK': {
      const newState = { ...action.payload };
      return newState;
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(postBook());
