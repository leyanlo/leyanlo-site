import React from 'react';
import { Link } from 'gatsby';
import Container from './container';

const Header = ({ siteTitle }) => (
  <nav
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <Container>
      <div
        style={{
          padding: '1.45rem 1.0875rem'
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </Container>
  </nav>
);

export default Header;
