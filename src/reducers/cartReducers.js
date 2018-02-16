const calcTotals = (cartArray) => {
  const totalAmount = cartArray
    .map(cartItem => cartItem.price * cartItem.quantity)
    .reduce((a, b) => a + b, 0);

  const totalQty = cartArray
    .map(cartItem => cartItem.quantity)
    .reduce((a, b) => a + b, 0);
  return {
    amount: totalAmount.toFixed(2),
    qty: totalQty,
  };
};

const cartReducers = (state = { cart: [] }, action) => {
  switch (action.type) {
    case 'GET_CART':
    case 'ADD_TO_CART':
    case 'DELETE_FROM_CART':
    case 'UPDATE_CART': {
      const newState = {
        ...state,
        cart: action.payload,
        totalAmount: calcTotals(action.payload).amount,
        totalQty: calcTotals(action.payload).qty,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducers;
