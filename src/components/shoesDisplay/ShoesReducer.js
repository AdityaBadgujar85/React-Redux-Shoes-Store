import { ADD_TO_CART, INCREMENT_QTY, DECREMENT_QTY} from './ShoesType';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      const existing = state.cartItems.find(i => i.id === item.id);
      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map(i =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, qty: 1 }],
        };
      }
    }

    case INCREMENT_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map(i =>
          i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
        ),
      };

    case DECREMENT_QTY:
      return {
        ...state,
        cartItems: state.cartItems
          .map(i =>
            i.id === action.payload ? { ...i, qty: i.qty - 1 } : i
          )
          .filter(i => i.qty > 0),
      };

    default:
      return state;
  }
};

export default cartReducer;
