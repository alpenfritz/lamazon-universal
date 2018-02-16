const addToCart = book => ({
  type: 'ADD_TO_CART',
  payload: book,
});

const deleteFromCart = _id => ({
  type: 'DELETE_FROM_CART',
  _id,
});

const updateCart = (_id, unit, cart) => {
  const currentCart = cart;
  const idxUpdate = currentCart.findIndex(book => book._id === _id);
  currentCart[idxUpdate].quantity += unit;
  return {
    type: 'UPDATE_CART',
    payload: currentCart,
  };
};

module.exports = {
  addToCart,
  deleteFromCart,
  updateCart,
};
