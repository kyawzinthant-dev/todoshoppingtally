import React from 'react'
import { addCart } from '../../redux/cart/cartAction'
import { product_api } from './fakeapi'
import { useDispatch } from 'react-redux'
function Product() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Product</h1>
      <div className="row">
        {
          product_api.map(e => (

            <div className="col-lg-4">
              <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={e.img} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{e.itemname}</h5>
                  <p className="card-text">${e.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(addCart(e))
                    }}
                  >Add To Cart
                   </button>
                </div>
              </div>
            </div>


          ))
        }
      </div>
    </div>
  )
}

export default Product
