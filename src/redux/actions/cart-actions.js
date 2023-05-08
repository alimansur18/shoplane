import { ActionTypes } from "../constants/action-type"

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (product) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: product
    }
}

export const increaseQuantity = (product) => {
    return {
        type: ActionTypes.INCREASE_QUANTITY,
        payload: product
    }
}

export const decreaseQuantity = (product) => {
    return {
        type: ActionTypes.DECREASE_QUANTITY,
        payload: product
    }
}

export const numberCart = (product) => {
    return {
        type: ActionTypes.NUMBER_CART,
        payload: product
    }
}