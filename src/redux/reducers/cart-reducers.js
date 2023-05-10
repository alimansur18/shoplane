import { ActionTypes } from "../constants/action-type";

const initialState = {
  Carts: [],
  get length() {
    return this.Carts.length }
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.NUMBER_CART: {
      return {
        ...state,
      };
    }
    case ActionTypes.ADD_TO_CART: {
      if (state.Carts.length === 0) {
        let item = {
          ...payload,
          quantity: 1,
        };
        state.Carts.push(item);
      } else {
        let check = false;
        state.Carts.map((item, index) => {
          if (item.id === payload.id) {
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
      const newArray = [...state.Carts];

      return {
        ...state,
        Carts: newArray
      };
    }
    case ActionTypes.REMOVE_FROM_CART: {
      return {
        Carts: state.Carts.filter((item) => item.id !== payload),
      };
    }
    case ActionTypes.INCREASE_QUANTITY: {

      state.Carts.map((item, index) => {
        if (item.id === payload) {
          state.Carts[index].quantity++;
        }
      });

      const newArray = [...state.Carts];
      return {
        ...state,
        Carts: newArray
      };
    }
    case ActionTypes.DECREASE_QUANTITY: {

      state.Carts.map((item, index) => {
        if (item.id === payload) {
          if(state.Carts[index].quantity !== 0){
            state.Carts[index].quantity--;
          }
        }
      });

      const newArray = [...state.Carts];

      return {
        ...state,
        Carts: newArray
      };
    }
    case ActionTypes.EMPTY_CART: {

      state.Carts.map(() => {
        while (state.Carts.length > 0) {
          state.Carts.pop();
        }

      });
      const newArray = [...state.Carts];
      return {
        ...state,
        Carts: newArray
      };
    }

    default:
      return state;
  }
};
