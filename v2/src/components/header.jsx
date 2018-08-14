import React from 'react';
import { Link } from 'gatsby';

import Container from './container';

import logo from './logo.svg';
import './header.css';

const Header = () => (
  <header className="header">
    <Container>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <Link to="/" className="navbar__item -brand">
          <img src={logo} alt="logo" className="navbar__logo" />
        </Link>
        <div className="navbar__gap" />
        <Link to="/software" className="navbar__item">
          Software
        </Link>
        <Link to="/violin" className="navbar__item">
          Violin
        </Link>
        <Link to="/cubing" className="navbar__item">
          Cubing
        </Link>
      </nav>
    </Container>
  </header>
);

export default Header;
