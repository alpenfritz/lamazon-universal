const addToCart = book => ({
  type: 'ADD_TO_CART',
  payload: book,
});

module.exports = {
  addToCart,
};
