import React from 'react'
import Link from 'gatsby-link'
import logo from './logo.svg'
import './navbar.css'

const Header = () => (
  <div className="navbar">
    <div className="navbar__container">
      <Link
        to="/"
        className="navbar__item"
      >
        <img src={logo} className="navbar__brand" />
      </Link>
      <div className="navbar__space" />
      <Link
        to="/software"
        className="navbar__item"
      >
        SOFTWARE
      </Link>
      <Link
        to="/violin"
        className="navbar__item"
      >
        VIOLIN
      </Link>
      <Link
        to="/cubing"
        className="navbar__item"
      >
        CUBING
      </Link>
    </div>
  </div>
)

export default Header
