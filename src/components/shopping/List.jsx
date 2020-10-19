import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { update, deleteitem } from '../../redux/shopping/shoppingAction';

function List() {
  const shoppinglist = useSelector(state=>state.shopping)
  const dispatch = useDispatch();

  function deletelist(index){
    dispatch(deleteitem(index))
  }
  
  function updatelist(index){
    dispatch(update(index))
  }

  return (
    <div>
      <ul class="list-group">

      {
        shoppinglist.map((e,i)=>{
          return <li key={i} 
          onClick={()=>{
            updatelist(i)
          }}
          onDoubleClick={()=>{
            deletelist(i)
          }}
          style={{textDecoration:e.done&&'line-through'}} 
          className="list-group-item">{e.task}</li>
        })
      }
  
    </ul>
     
    </div>
  )
}

export default List
