import { ActionTypes } from "../constants/action-type";

const initialState = {
  favourites: [],
};

export const favouriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_FAVOURITE: {
      // if (state.favourites.length === 0) {
      //   state.favourites.push(payload);
      // } else {
      //   state.favourites.map(item => { 
      //     if (payload.id !== item.id) {
      //     }
      //   });
      // }
      state.favourites.push(payload);

      const newArray = [...state.favourites];
      return {
        ...state,
        favourites: newArray,
      };
      
    }
    case ActionTypes.REMOVE_FROM_FAVOURITE: {
      return {
        favourites: state.favourites.filter((item) => item.productId.id !== payload)
      };
    }
    default:
      return state;
  }
};
