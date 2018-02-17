// REACT-ROUTER
import { BrowserRouter } from 'react-router-dom';

// REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// REDUX
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// others
import routes from './routes';

// REDUX
const middleware = applyMiddleware(thunk, logger);
const initialState = window.INITIAL_STATE; // pass initial state from SERVER STORE
// const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, initialState, middleware);

// REACT-ROUTER
const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>
);

// REACT
render(Routes, document.getElementById('app'));
