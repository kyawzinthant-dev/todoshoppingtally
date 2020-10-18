import React from 'react'

function Input() {
  return (
    <div style={{display:'flex'}}>
     <input className="form-control" type="text" placeholder="Add Shopping List" />
      <button className="btn btn-info">Add</button>
    </div>
  )
}

export default Input
