import React from 'react'
import Link from 'gatsby-link'
import logo from './logo.svg'

const Header = () => (
  <div className="navbar">
    <div className="navbar__container">
      <Link
        to="/"
        className="navbar__item --brand"
      >
        <img src={logo} />
      </Link>
      <Link
        to="/software"
        className="navbar__item"
      >
        Software
      </Link>
      <Link
        to="/violin"
        className="navbar__item"
      >
        Violin
      </Link>
      <Link
        to="/cubing"
        className="navbar__item"
      >
        Cubing
      </Link>
    </div>
  </div>
)

export default Header
