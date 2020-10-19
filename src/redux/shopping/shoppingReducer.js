import { ADD,UPDATE,DELETE } from './shoppingAction'
function shoppingReducer(state = [{task:'to buy egg',done:true}], action){
  switch(action.type){
    case ADD:
      return [...state,{
        task: action.payload,
        done: false
      }]
    case UPDATE:
      return state.map((e,i)=>{
        if(i === action.payload){
          e.done = !e.done
        }
        return e;
      })
    case DELETE:
      return state.filter((e,i)=> i !== action.payload)
    default:
      return state;
  }
}

export default shoppingReducer;