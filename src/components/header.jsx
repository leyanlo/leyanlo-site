import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import logo from '../images/logo.svg';
import navbarHome from '../images/navbar-home.svg';
import navbarLaptop from '../images/navbar-laptop.svg';
import navbarViolin from '../images/navbar-violin.svg';
import navbarCubing from '../images/navbar-cubing.svg';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container -header">
      <Link to="/" className="brand">
        <img src={logo} className="brand__logo" alt="Logo" />
        <h3 className="brand__title">{siteTitle}</h3>
      </Link>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <Link
          to="/"
          className="navbar__item -hiddenTablet"
          activeClassName="-active"
        >
          <img src={navbarHome} className="navbar__icon" alt="Home icon" />
          Home
        </Link>
        <Link to="/software" className="navbar__item" activeClassName="-active">
          <img src={navbarLaptop} className="navbar__icon" alt="Laptop icon" />
          Software
        </Link>
        <Link to="/violin" className="navbar__item" activeClassName="-active">
          <img src={navbarViolin} className="navbar__icon" alt="Violin icon" />
          Violin
        </Link>
        <Link to="/cubing" className="navbar__item" activeClassName="-active">
          <img src={navbarCubing} className="navbar__icon" alt="Cubing icon" />
          Cubing
        </Link>
      </nav>
      <div className="header__gap" />
      {/* TODO: Add social media icons */}
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.node.isRequired
};

export default Header;
