import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getdata } from '../../redux/numbers/numberAction';
import Loading from '../loading/Loading';


function Number() {
  const [input,setInput] = useState('');
  const answer = useSelector(state=>state.number)
  const loading = useSelector(state=>state.loading)
  const dispatch = useDispatch();

  function getData(){
    dispatch(getdata(input));
  }
  return (<>
    
    {loading && <Loading/>}
    
    <div>
    

      <h1>Number API</h1>
      <input
    value={input}

    onChange={(e)=>setInput(e.target.value)}

    onKeyPress={e=>e.key==="Enter"&&getData()}

    className="form-control" 

    type="text" 

    placeholder="Type A Number" 
  />

  {answer.error ? <span style={{backgroundColor:'red'}}>{answer.error}</span>
  :
  <span style={{fontSize:'30px'}}>Result: {answer.data}</span>
}

    </div>
  
  </>
  )
  
}

export default Number
