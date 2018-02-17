// REACT-ROUTER
import { Route, Switch } from 'react-router-dom';

// REACT
import React from 'react';

import BooksList from './components/booksList';
import BooksForm from './components/booksForm';
import Cart from './components/cart';
import Menu from './components/menu';
import Footer from './components/footer';

// Retrieve Components based on STATUS
const Status = ({ code, children }) => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) 
        staticContext.status = code;
      return children;
    }} />
  )
}

// Not-Fount component
const NotFound = () => {
  return (
    <Status code={404}>
      <div>
        <h2>Something went wrong, cannot find this page</h2>
      </div>
    </Status>
  );
};

// CLIENT-SERVER SHARED ROUTES
const routes = (
  <div>
    <Menu />
    <Switch>
      <Route exact={true} path="/" component={BooksList} />
      <Route path="/admin" component={BooksForm} />
      <Route path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default routes;
