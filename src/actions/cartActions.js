const addToCart = book => ({
  type: 'ADD_TO_CART',
  payload: book,
});

const deleteFromCart = _id => ({
  type: 'DELETE_FROM_CART',
  _id,
});

const updateCart = (_id, unit) => ({
  type: 'UPDATE_CART',
  _id,
  unit,
});

module.exports = {
  addToCart,
  deleteFromCart,
  updateCart,
};
