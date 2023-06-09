import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/navbar.css'

const NavBar = () => {
  return (
    <nav>
    <Link to="/">Sitename</Link>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/cart"> Cart</Link>
      </li>
      
    </ul>
  </nav>
  )
}

export default NavBar;