import React from 'react'
import Button from './Button'
import Count from './Count'

function Tally() {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Tally</h1>
      <Count/>
      <Button color="primary" name="Increment" />
      <Button color="danger" name="Decrement" />
    </div>
  )
}

export default Tally
