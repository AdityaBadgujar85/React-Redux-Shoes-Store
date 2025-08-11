import { BUY_SHOES } from './ShoesType';
import { ADD_TO_CART, INCREMENT_QTY,DECREMENT_QTY } from './ShoesType';

export const BuyShoes = (shoe) => {
  return {
    type: BUY_SHOES,
    payload: shoe
  };
};

export const AddToCart = (shoe) => ({
  type: ADD_TO_CART,
  payload: shoe,
});

export const IncrementQty = (id) => ({
  type: INCREMENT_QTY,
  payload: id,
});

export const DecrementQty = (id) => ({
  type: DECREMENT_QTY,
  payload: id,
});