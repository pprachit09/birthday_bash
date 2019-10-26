import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Coderlust</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
