import { ADD, DELETE, UPDATE } from "./todoAction";

function todoReducer(state = [], action){
  switch(action.type){
    case ADD:
      return [...state, {
        task: action.payload,
        done: false
      }]
    case DELETE:
      return state.filter((e,i)=>i!== action.payload)
    case UPDATE:
      return state.map((e,i)=>{
        if(i === action.payload){
          e.done = !e.done
        }
        return e;
      })
      default:
      return state;
  }
}

export default todoReducer;