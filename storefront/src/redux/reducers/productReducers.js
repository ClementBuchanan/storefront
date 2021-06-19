import { Category } from '@material-ui/icons';
import { ActionTypes } from '../contents/actionTypes';

const initialState = {
  products: [
    {
      id: 1,
      title: 'Razors',
      category: 'Grooming',
    },
  ],
};
//create 3 actions that will use the 3 action types
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {}
    default:
      return state;
  };
}
