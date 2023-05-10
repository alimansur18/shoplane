import { combineReducers } from "redux";
import { cartReducer } from "./cart-reducers";
import { favouriteReducer } from "./favourite-reducers";

const rootReducer = combineReducers({
    cartReducer,
    favouriteReducer
})

export default rootReducer;