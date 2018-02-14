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
      const newState = {
        cart: [
          ...state.cart,
          ...action.payload,
        ],
      };
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducers;
