import { Link } from 'gatsby';
import React from 'react';

import NavbarCubingIcon from '../images/navbar-cubing.svg';
import NavbarHomeIcon from '../images/navbar-home.svg';
import NavbarLaptopIcon from '../images/navbar-laptop.svg';
import NavbarViolinIcon from '../images/navbar-violin.svg';

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <Link to="/" className="navbar__item -hiddenTablet" activeClassName="-active">
      <NavbarHomeIcon className="navbar__icon" />
      Home
    </Link>
    <Link
      to="/software/"
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent ? { className: 'navbar__item -active' } : { className: 'navbar__item' }
      }
    >
      <NavbarLaptopIcon className="navbar__icon" />
      Software
    </Link>
    <Link
      to="/violin/"
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent ? { className: 'navbar__item -active' } : { className: 'navbar__item' }
      }
    >
      <NavbarViolinIcon className="navbar__icon" />
      Violin
    </Link>
    <Link
      to="/cubing/"
      getProps={({ isPartiallyCurrent }) =>
        isPartiallyCurrent ? { className: 'navbar__item -active' } : { className: 'navbar__item' }
      }
    >
      <NavbarCubingIcon className="navbar__icon" />
      Cubing
    </Link>
  </nav>
);

export default Navbar;
