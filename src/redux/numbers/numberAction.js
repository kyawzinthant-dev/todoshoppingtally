import axios from 'axios'
import { endLoading, startLoading } from '../loading/loadingAction'

export const GET = 'GET'
export const ERROR = 'ERROR'
export function getdata(numbervalue){

      return async (dispatch) => {
        try{
        
          //loading true
        dispatch(startLoading())
        const response = await axios(`http://numbersapi.com/${numbervalue}/math`)
        //if error , do not arrive here
        dispatch({
          type: GET,
          payload: response.data
        })
        dispatch(endLoading())
      }
      catch(error){
         dispatch({
           type:ERROR
         })
         dispatch(endLoading())
      }
      }
}