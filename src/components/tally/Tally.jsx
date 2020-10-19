import React from 'react'
import Button from './Button'
import Count from './Count'
import { useDispatch } from 'react-redux'
import { minus, plus } from '../../redux/tally/tallyAction'

function Tally() {
  const dispatch = useDispatch();

  function incre(){
      dispatch(plus(1));
  }
  function decre(){
      dispatch(minus(1));

  }

  return (
    <div style={{textAlign:'center'}}>
      <h1>Todo Count</h1>
      <Count/>
      {/* <Button click={incre} color="primary" name="Increment" />
      <Button click={decre} color="danger" name="Decrement" /> */}
    </div>
  )
}

export default Tally
