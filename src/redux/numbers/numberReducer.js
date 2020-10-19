import { GET, ERROR } from "./numberAction";

export default function numberReducer(state={}, action){
  switch(action.type){
    case GET:
      return {data: action.payload};
    case ERROR:
      return {error: 'Something went wrong'};
    default:
      return state;
  }
}