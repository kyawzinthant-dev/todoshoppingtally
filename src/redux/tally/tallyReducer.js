import { PLUS,MINUS } from './tallyAction';

function tallyReducer(state = 0, action){
  switch(action.type){
    case PLUS:
      return state + action.payload
    case MINUS:
      if(state - action.payload > -1)
      return state - action.payload
    default:
      return state;
  }
}

export default tallyReducer;