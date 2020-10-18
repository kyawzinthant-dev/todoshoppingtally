import shoppingReducer from '../shopping/shoppingReducer';
import tallyReducer from '../tally/tallyReducer';
import todoReducer from '../todo/todoReducer';

import { combineReducers } from 'redux';

var combine = {

  todo: todoReducer,
  shopping: shoppingReducer,
  tally: tallyReducer

}

export default combineReducers(combine);

