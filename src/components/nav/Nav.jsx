import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Nav() {
  const cart = useSelector(state => state.cart)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand" href="#">My App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/todo">To do</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shopping">Shopping List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tally">Tally</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/number">Number</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">Product Page</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart ({cart.length})</Link>
          </li>

        </ul>
      </div>
    </nav>

  )
}

export default Nav
