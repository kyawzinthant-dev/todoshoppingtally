import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/shopping/shoppingAction';

function Input() {
  const [input,setInput] = useState('');
  const dispatch = useDispatch();
  function addlist(value){
    if(input){
      dispatch(add(value))
      setInput('')
    }
  }
  return (
    <div style={{display:'flex'}}>
     <input 
      onKeyPress={(e)=>{
        if(e.key === 'Enter'){
          addlist(input)
        }
      }}
      value={input}
      onChange={(e)=>{
        setInput(e.target.value)
      }}
      className="form-control" 
      type="text" 
      placeholder="Add Shopping List" 
     />
      <button 
      onClick={()=>{
        addlist(input)
      }}
      className="btn btn-info">Add</button>
      
    </div>
  )
}

export default Input
