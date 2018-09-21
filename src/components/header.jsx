import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderEmailIcon from '../images/header-email.svg';
import HeaderGithubIcon from '../images/header-github.svg';
import HeaderLinkedinIcon from '../images/header-linkedin.svg';
import HeaderTwitterIcon from '../images/header-twitter.svg';
import LogoIcon from '../images/logo.svg';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container -header">
      <Link to="/" className="brand">
        <LogoIcon className="brand__logo" />
        <span className="brand__title">{siteTitle}</span>
      </Link>
      <Navbar />
      <div className="header__gap" />
      <a
        href="https://twitter.com/leyanlo"
        title="Twitter"
        target="_blank"
        rel="noopener noreferrer"
        className="header__iconWrapper"
      >
        <HeaderTwitterIcon className="header__icon" />
      </a>
      <a
        href="https://github.com/leyanlo"
        title="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="header__iconWrapper"
      >
        <HeaderGithubIcon className="header__icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/leyanlo/"
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className="header__iconWrapper"
      >
        <HeaderLinkedinIcon className="header__icon" />
      </a>
      <a
        href="mailto:leyanlo@gmail.com"
        title="Email"
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
