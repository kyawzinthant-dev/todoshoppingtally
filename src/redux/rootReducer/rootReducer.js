import shoppingReducer from '../shopping/shoppingReducer';
import tallyReducer from '../tally/tallyReducer';
import todoReducer from '../todo/todoReducer';
import numberReducer from '../numbers/numberReducer';
import loadingReducer from '../loading/loadingReducer';

import { combineReducers } from 'redux';
import cartReducer from '../cart/cartReducer';


var combine = {

  loading: loadingReducer,
  todo: todoReducer,
  shopping: shoppingReducer,
  tally: tallyReducer,
  number: numberReducer,
  cart: cartReducer,



}

export default combineReducers(combine);

