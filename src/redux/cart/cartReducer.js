import { ADD_CART, REMOVE_CART, UPDATE_QUANTITY } from './cartAction'

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_CART:
      let newItem = action.payload;
      var found = false;

      state.map(e => {
        if (e.id === newItem.id) {
          found = true;
        }
      })

      if (found) {
        var final_result = state.map(e => {
          if (e.id === newItem.id) {
            e.quantity += 1;
            e.subtotal = e.quantity * parseInt(e.price)
          }
          return e;
        })

        return final_result
      }

      else {
        newItem.quantity = 1;
        newItem.subtotal = newItem.price
        return [...state, newItem]
      }


    case REMOVE_CART:
      return state.filter(e => e.id !== action.payload)

    case UPDATE_QUANTITY:
      const id = action.payload.id;
      const newquantity = action.payload.newquantity;

      var final_result = state.map(e => {
        if (e.id === id) {
          e.quantity = newquantity;
          e.subtotal = e.quantity * parseInt(e.price)
        }
        return e;
      })

      return final_result




    default:
      return state;
  }

}