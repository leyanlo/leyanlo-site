import { Link } from 'gatsby';
import React from 'react';

import NavbarCubingIcon from '../images/navbar-cubing.svg';
import NavbarHomeIcon from '../images/navbar-home.svg';
import NavbarLaptopIcon from '../images/navbar-laptop.svg';
import NavbarViolinIcon from '../images/navbar-violin.svg';

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <Link
      to="/"
      className="navbar__item -hiddenTablet"
      activeClassName="-active"
    >
      <NavbarHomeIcon className="navbar__icon" />
      Home
    </Link>
    <Link to="/software" className="navbar__item" activeClassName="-active">
      <NavbarLaptopIcon className="navbar__icon" />
      Software
    </Link>
    <Link to="/violin" className="navbar__item" activeClassName="-active">
      <NavbarViolinIcon className="navbar__icon" />
      Violin
    </Link>
    <Link to="/cubing" className="navbar__item" activeClassName="-active">
      <NavbarCubingIcon className="navbar__icon" />
      Cubing
    </Link>
  </nav>
);

export default Navbar;
