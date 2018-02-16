// REACT-ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import BooksList from './components/booksList';
import BooksForm from './components/booksForm';
import Cart from './components/cart';
import Menu from './components/menu';
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

// REACT-ROUTER
const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={BooksList} />
          <Route path="/admin" component={BooksForm} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

// REACT
render(Routes, document.getElementById('app'));
