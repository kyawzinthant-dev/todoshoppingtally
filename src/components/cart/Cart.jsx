import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart, updateQuantity } from '../../redux/cart/cartAction';

function Cart() {
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart Page</h1>

      {
        cart.length < 1 ? <h1>No Item in the Cart</h1> :
          <>

            {cart.map(e => (
              <table>
                <th>Photo</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>

                <tr>
                  <td style={{ padding: '20px' }}><img style={{ width: '200px' }} src={e.img} alt="itemphoto" /></td>
                  <td style={{ padding: '20px' }}>{e.itemname}</td>
                  <td style={{ padding: '20px' }}>${e.price}</td>
                  <td style={{ padding: '20px' }}>
                    <input type="number" value={e.quantity} min='1' max='100'
                      onChange={(event) => {
                        dispatch(updateQuantity(e.id, event.target.value))
                      }}
                    /></td>
                  <td style={{ padding: '20px' }}>${e.subtotal}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(removeCart(e.id))
                      }}
                      className="btn btn-danger">Remove</button></td>
                </tr>
                <tr>
                  <td></td>
                </tr>
              </table>
            ))
            }
            <table>
              <tr>
                <td style={{ padding: '20px' }}></td>
                <td style={{ padding: '20px' }}></td>
                <td style={{ padding: '20px' }}></td>
                <td style={{ padding: '20px' }}>Total</td>
                <td style={{ padding: '20px' }}>${
                  cart.reduce((sum, ele) => {
                    return sum + parseInt(ele.subtotal)
                  }, 0)

                }</td>

              </tr>
            </table>
          </>
      }

    </div>
  )
}

export default Cart
