// in the index.js we mport and combine all the reducers fromproductReducers.js

import { combineReducers } from 'redux';
import { productsReducer } from './productReducers';

const reducers = combineReducers({
  allProducts: productsReducer,
  // product: selectedProductReducer,
});

export default reducers;