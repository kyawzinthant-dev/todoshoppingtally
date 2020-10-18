import React from 'react'

function Input() {
  return (
    <div style={{display:'flex'}}>
     <input className="form-control" type="text" placeholder="Add Todo" />
      <button className="btn btn-info">Add</button>
    </div>
  )
}

export default Input
