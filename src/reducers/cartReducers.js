const cartReducers = (state = { cart: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newState = {
        ...state,
        cart: [
          ...action.payload,
        ],
      };
      return newState;
    }
    case 'DELETE_FROM_CART': {
      const cartBeforeDelete = [...state.cart];
      const idxDelete = cartBeforeDelete.findIndex(book => book.id === action.id);
      const cartAfterDelete = {
        cart: [
          ...cartBeforeDelete.slice(0, idxDelete),
          ...cartBeforeDelete.slice(idxDelete + 1),
        ],
      };
      return cartAfterDelete;
    }
    case 'UPDATE_CART': {
      const currentCart = [...state.cart];
      const idxUpdate = currentCart.findIndex(book => book.id === action.id);
      currentCart[idxUpdate].quantity += action.unit;
      const newState = { ...state, cart: currentCart };
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducers;
