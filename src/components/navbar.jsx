import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { StyledAnchor } from './styled/link';
import NavbarCubingIcon from '../images/navbar-cubing.svg';
import NavbarHomeIcon from '../images/navbar-home.svg';
import NavbarLaptopIcon from '../images/navbar-laptop.svg';
import NavbarViolinIcon from '../images/navbar-violin.svg';

const Navbar = styled.nav`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--zNavbar);
  display: flex;
  height: var(--navbarHeight);
  padding-right: var(--safeAreaInsetRight);
  padding-bottom: var(--safeAreaInsetBottom);
  padding-left: var(--safeAreaInsetLeft);
  background-color: var(--navbarBackground);

  /* Desktop */
  @media screen and (min-width: 1024px) {
    position: initial;
    width: initial;
    height: 100%;
    padding: 0;
    background-color: transparent;
  }
`;

const NavbarIcon = styled.svg`
  flex-grow: 1;
  width: 24px;
  height: 24px;

  /* Tablet or landscape phone */
  @media screen and (min-width: 769px), screen and (orientation: landscape) {
    flex-grow: 0;
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const NavbarLink = styled(StyledAnchor)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  color: var(--darkGray);
  font-size: var(--fontXSmall);
  fill: var(--darkGray);
  &.active,
  &[partially-active] {
    color: var(--linkColor);
    fill: var(--linkColor);

    /* Desktop */
    @media screen and (min-width: 1024px) {
      font-weight: bold;
    }
  }

  /* Tablet or landscape phone */
  @media screen and (min-width: 769px), screen and (orientation: landscape) {
    flex-direction: row;
    justify-content: center;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 0 16px;
    font-size: var(--fontMedium);
    text-transform: uppercase;
    ${props => (props['hidden-tablet'] ? `display: none` : ``)};
  }
`;

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { 'partially-active': 'true' } : null;

export default () => (
  <Navbar role="navigation" aria-label="main navigation">
    <NavbarLink as={Link} to="/" hidden-tablet="true" activeClassName="active">
      <NavbarIcon as={NavbarHomeIcon} />
      Home
    </NavbarLink>
    <NavbarLink as={Link} to="/software/" getProps={isPartiallyActive}>
      <NavbarIcon as={NavbarLaptopIcon} />
      Software
    </NavbarLink>
    <NavbarLink as={Link} to="/violin/" getProps={isPartiallyActive}>
      <NavbarIcon as={NavbarViolinIcon} />
      Violin
    </NavbarLink>
    <NavbarLink as={Link} to="/cubing/" getProps={isPartiallyActive}>
      <NavbarIcon as={NavbarCubingIcon} />
      Cubing
    </NavbarLink>
  </Navbar>
);
