import axios from 'axios';

// GET CART
const getCart = () => {
  return function (dispatch) {
    axios.get('/api/cart')
      .then(function (response) {
        dispatch({ type: 'GET_CART', payload: response.data })
      })
      .catch(function (err) {
        dispatch({ type: 'GET_CART_REJECTED', payload: err })
      });
  };
};

// ADD TO CART
const addToCart = cart => {
  return function(dispatch) {
    axios.post('/api/cart', cart)
      .then(function(response){
        dispatch({ type: 'ADD_TO_CART', payload: response.data })
      })
      .catch(function(err){
        dispatch({ type: 'ADD_TO_CART_REJECTED', payload: err })
      });
  };
};

// DELETE FROM CART
const deleteFromCart = (_id, cart) => {
  const currentCart = cart;
  const idxDelete = currentCart.findIndex(book => book._id === _id);
  const cartAfterDelete = [
    ...currentCart.slice(0, idxDelete),
    ...currentCart.slice(idxDelete + 1),
  ];
  return function (dispatch) {
    axios.post('/api/cart/', cartAfterDelete)
      .then(function (response) {
        dispatch({ type: 'DELETE_FROM_CART', payload: response.data })
      })
      .catch(function (err) {
        dispatch({ type: 'DELETE_FROM_CART_REJECTED', payload: err })
      });
  };
};

// UPDATE CART
const updateCart = (_id, unit, cart) => {
  const updatedCart = cart;
  const idxUpdate = updatedCart.findIndex(book => book._id === _id);
  updatedCart[idxUpdate].quantity += unit;
  return function (dispatch) {
    axios.post('/api/cart', updatedCart)
      .then(function (response) {
        dispatch({ type: 'UPDATE_CART', payload: response.data })
      })
      .catch(function (err) {
        dispatch({ type: 'UPDATE_CART_REJECTED', payload: err })
      });
  };
};

module.exports = {
  getCart,
  addToCart,
  deleteFromCart,
  updateCart,
};
