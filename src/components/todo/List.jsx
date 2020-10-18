import React from 'react'
import { useSelector } from 'react-redux'
import { deleteit, update } from '../../redux/todo/todoAction';
import {useDispatch} from 'react-redux'


function List() {
  const todolist = useSelector(state=>state.todo)
  const dispatch = useDispatch()
  
  function deleteTodo(index){
    dispatch(deleteit(index));

  }
  function updateTodo(index){
    dispatch(update(index));

  }
  
  return (
    <div>
      <ul class="list-group">

      {
        todolist.map((e,i)=>{
          return <li 
          onClick={()=>{
            updateTodo(i)
          }}
          onDoubleClick={()=>{
            deleteTodo(i)
          }}
          key={i} style={{textDecoration:e.done&&'line-through'}} className="list-group-item">{e.task}</li>
        })
      }
  
    </ul>
     
    </div>
  )
}

export default List
