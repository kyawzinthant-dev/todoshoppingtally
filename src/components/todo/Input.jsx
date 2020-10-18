import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { add } from '../../redux/todo/todoAction';
function Input() {
  const [input,setInput] = useState('');
  const dispatch = useDispatch();

  function addTodo(todovalue){
    if(input){
    dispatch(add(todovalue));
    setInput('');
    }
  }

  return (
    <div style={{display:'flex'}}>
     <input
     onKeyPress={(e)=>{
       if(e.key === "Enter")
       addTodo(input)
     }}
     value={input}
     onChange={(e)=>setInput(e.target.value)}
     className="form-control" 
     type="text" 
     placeholder="Add Todo" 
     />
    
    <button
    className="btn btn-info"
    onClick={()=>{
      addTodo(input)
    }}
    >Add</button>
    </div>
  )
}

export default Input
