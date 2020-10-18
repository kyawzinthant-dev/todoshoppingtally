import React from 'react'
import { useSelector } from 'react-redux'

function Count() {
  const count = useSelector(state => state.tally)
  return (
    <div style={{fontSize:'100px', color:'blue'}}>
      Count : {count}
    </div>
  )
}

export default Count
