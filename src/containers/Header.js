import React from 'react'
import Home from './Home'
import ManageProducts from './ManageProducts'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/ManageProducts">Manage Products</Link>
        </li>
      </ul>
    </>
  )
}

export default Header
