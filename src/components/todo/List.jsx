import React from 'react'

function List() {
  const dummydata = [
    {
      task:'to sleep',
      done: false
    },
    {
      task:'to eat',
      done: true
    }
  ]
  return (
    <div>
      <ul class="list-group">

      {
        dummydata.map((e,i)=>{
          return <li key={i} style={{textDecoration:e.done&&'line-through'}} className="list-group-item">{e.task}</li>
        })
      }
  
    </ul>
     
    </div>
  )
}

export default List
