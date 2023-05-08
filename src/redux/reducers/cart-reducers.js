import { ActionTypes } from "../constants/action-type";

const initialState = {
  numberInCart: 0,
  Carts: [],
};

export const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.NUMBER_CART: {
      return {
        ...state,
      };
    }
    case ActionTypes.ADD_TO_CART: {
      if (state.numberInCart === 0) {
        let item = {
          ...payload,
          quantity: 1,
        };
        state.Carts.push(item);
      } else {
        let check = false;
        state.Carts.map((item, index) => {
          if (item._id === payload._id) {
            state.Carts[index].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _item = {
            ...payload,
            quantity: 1,
          };
          state.Carts.push(_item);
        }
      }
      return {
        ...state,
        numberInCart: state.numberInCart + 1,
      };
    }

    default: 
        return state;
  }
};
