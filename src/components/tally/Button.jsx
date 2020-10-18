import React from 'react'

function Button({click, color, name}) {
  return (
    <button 
    onClick={click}

    className={`btn btn-${color}`}
    >
      {name}
    </button>
  )
}

export default Button
