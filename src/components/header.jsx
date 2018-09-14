import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderEmailIcon from '../images/header-email.svg';
import HeaderGithubIcon from '../images/header-github.svg';
import HeaderLinkedinIcon from '../images/header-linkedin.svg';
import HeaderTwitterIcon from '../images/header-twitter.svg';
import LogoIcon from '../images/logo.svg';
import NavbarCubingIcon from '../images/navbar-cubing.svg';
import NavbarHomeIcon from '../images/navbar-home.svg';
import NavbarLaptopIcon from '../images/navbar-laptop.svg';
import NavbarViolinIcon from '../images/navbar-violin.svg';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container -header">
      <Link to="/" className="brand">
        <LogoIcon className="brand__logo" />
        <span className="brand__title">{siteTitle}</span>
      </Link>
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
      <div className="header__gap" />
      <a
        href="https://twitter.com/leyanlo"
        target="_blank"
        rel="noopener noreferrer"
        className="header__iconWrapper"
      >
        <HeaderTwitterIcon className="header__icon" />
      </a>
      <a
        href="https://github.com/leyanlo"
        target="_blank"
        rel="noopener noreferrer"
        className="header__iconWrapper"
      >
        <HeaderGithubIcon className="header__icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/leyanlo/"
        target="_blank"
        rel="noopener noreferrer"
        className="header__iconWrapper"
      >
        <HeaderLinkedinIcon className="header__icon" />
      </a>
      <a
        href="mailto:leyanlo@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="header__iconWrapper"
      >
        <HeaderEmailIcon className="header__icon" />
      </a>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.node.isRequired
};

export default Header;
