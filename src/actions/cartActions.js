const addToCart = book => ({
  type: 'ADD_TO_CART',
  payload: book,
});

const deleteFromCart = book => ({
  type: 'DELETE_FROM_CART',
  payload: book,
});

module.exports = {
  addToCart,
  deleteFromCart,
};
