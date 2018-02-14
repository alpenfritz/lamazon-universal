const addToCart = book => ({
  type: 'ADD_TO_CART',
  payload: book,
});

const deleteFromCart = id => ({
  type: 'DELETE_FROM_CART',
  id,
});

const updateCart = (id, unit) => ({
  type: 'UPDATE_CART',
  id,
  unit,
});

module.exports = {
  addToCart,
  deleteFromCart,
  updateCart,
};
