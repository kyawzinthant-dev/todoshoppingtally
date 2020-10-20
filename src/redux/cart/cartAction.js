
export const ADD_CART = 'ADD_CART';//1st action
export const REMOVE_CART = 'REMOVE_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export function addCart(itemObj) {
  return (dispatch) => {

    dispatch({
      type: ADD_CART,
      payload: itemObj
    })
  }
}

export function removeCart(id) {
  return (dispatch) => {

    dispatch({
      type: REMOVE_CART,
      payload: id
    })
  }
}


export function updateQuantity(id, newquantity) {
  return (dispatch) => {

    dispatch({
      type: UPDATE_QUANTITY,
      payload: {
        id: id,
        newquantity: newquantity
      }
    })
  }

}
