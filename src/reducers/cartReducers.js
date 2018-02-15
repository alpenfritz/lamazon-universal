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
    case 'ADD_TO_CART': {
      const newState = {
        ...state,
        cart: [...action.payload],
        totalAmount: calcTotals([...action.payload]).amount,
        totalQty: calcTotals([...action.payload]).qty,
      };
      return newState;
    }
    case 'DELETE_FROM_CART': {
      const cartBeforeDelete = [...state.cart];
      const idxDelete = cartBeforeDelete.findIndex(book => book.id === action.id);
      const payloadAfterDelete = [
        ...cartBeforeDelete.slice(0, idxDelete),
        ...cartBeforeDelete.slice(idxDelete + 1),
      ];
      const cartAfterDelete = {
        cart: payloadAfterDelete,
        totalAmount: calcTotals(payloadAfterDelete).amount,
        totalQty: calcTotals(payloadAfterDelete).qty,
      };
      return cartAfterDelete;
    }
    case 'UPDATE_CART': {
      const currentCart = [...state.cart];
      const idxUpdate = currentCart.findIndex(book => book.id === action.id);
      currentCart[idxUpdate].quantity += action.unit;
      const newState = {
        ...state,
        cart: currentCart,
        totalAmount: calcTotals(currentCart).amount,
        totalQty: calcTotals(currentCart).qty,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducers;
