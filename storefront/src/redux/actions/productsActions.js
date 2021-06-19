
//create 3 actions for the ActionTypes created in ActionTypes.js
import { ActionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
  //actions always returns an object with key:value pairs
  return {
    // this is the action we want to perform
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
