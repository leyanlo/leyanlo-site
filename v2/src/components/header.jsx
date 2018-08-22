import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as NavbarHome } from '../images/navbar-home.svg';
import { ReactComponent as NavbarLaptop } from '../images/navbar-laptop.svg';
import { ReactComponent as NavbarViolin } from '../images/navbar-violin.svg';
import { ReactComponent as NavbarCubing } from '../images/navbar-cubing.svg';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container -header">
      <Link to="/" className="brand">
        <Logo className="brand__logo" />
        <h3 className="brand__title">{siteTitle}</h3>
      </Link>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <Link to="/" className="navbar__item -hiddenTablet">
          <NavbarHome className="navbar__icon" />
          Home
        </Link>
        <Link to="/software" className="navbar__item">
          <NavbarLaptop className="navbar__icon" />
          Software
        </Link>
        <Link to="/violin" className="navbar__item">
          <NavbarViolin className="navbar__icon" />
          Violin
        </Link>
        <Link to="/cubing" className="navbar__item">
          <NavbarCubing className="navbar__icon" />
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
