import React from 'react'
import Link from 'gatsby-link'
import logo from './logo.svg'

const Header = () => (
  <header className="header">
    <div className="container">
      <Link
        to="/"
        className="nav__item --brand"
      >
        <img src={logo} />
      </Link>
      <Link
        to="/software"
        className="nav__item"
      >
        Software
      </Link>
      <Link
        to="/violin"
        className="nav__item"
      >
        Violin
      </Link>
      <Link
        to="/cubing"
        className="nav__item"
      >
        Cubing
      </Link>
    </div>
  </header>
)

export default Header
