// REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import BooksList from './components/booksList';
import Menu from './components/navbar';
import Footer from './components/footer';

// REDUX
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { postBook, deleteBook, updateBook } from './actions/booksActions';
import { addToCart } from './actions/cartActions';
import rootReducer from './reducers/index';

// REDUX
const loggerMiddleware = applyMiddleware(logger);
const store = createStore(rootReducer, loggerMiddleware);

// REACT
render(
  <Provider store={store}>
    <div>
      <Menu />
      <BooksList />
      <Footer />
    </div>
  </Provider>, document.getElementById('app'),
);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(postBook([
//   {
//     id: 1,
//     title: 'First Book',
//     price: 10,
//   },
//   {
//     id: 2,
//     title: 'Second Book',
//     price: 20,
//   },
// ]));
// store.dispatch(deleteBook({ id: 1 }));
// store.dispatch(updateBook({
//   id: 2,
//   title: 'Updated Title',
// }));

// store.dispatch(addToCart([{ id: 2 }]));
