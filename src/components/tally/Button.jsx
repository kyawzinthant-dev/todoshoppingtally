import React from 'react'

function Button({color, name}) {
  return (
    <button className={`btn btn-${color}`}>{name}</button>
  )
}

export default Button
