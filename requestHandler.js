import axios from 'axios';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import rootReducer from './src/reducers/index';
import routes from './src/routes';

const handleRender = ((req, res) => {
  axios.get('http://localhost:3001/books')
    .then((response) => {
      // const myHtml = JSON.stringify(response.data);
      // res.render('index', { myHtml });

      // STEP 1: Create a REDUX STORE on the SERVER
      const store = createStore(rootReducer, { books: { books: response.data } });
      // STEP 2: Get INITIAL STATE from the STORE
      const initialState = JSON.stringify(store.getState())
        .replace(/<\/script/g, '<\\/script') // prevent JS injection through escaping
        .replace(/<!--/g, '<\\!--');
      // STEP 3: REACT-ROUTER on the SERVER for intercepting CLIENT REQUESTS
      const context = {};
      console.log('context.url ---------->', context.url);
      const reactComponent = renderToString(
        <Provider store={store}>
          <StaticRouter
            location={req.url}
            context={context}>
            {routes}
          </StaticRouter>
        </Provider>
      );
      if (context.url) {
        redirect(context.status, context.url);
      } else {
        res.status(200).render('index', { reactComponent, initialState });
      }
    })
    .catch((err) => {
      console.log('# Initial Server-side rendering error', err);
    });
});

module.exports = handleRender;
