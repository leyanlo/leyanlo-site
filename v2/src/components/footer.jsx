import React from 'react';

import Container from './container';

import './footer.css';

const Header = () => (
  <footer className="footer">
    <Container>
      <div className="footerBar">
        <div className="footerBar__copyright">© 2018 Leyan Lo</div>
      </div>
    </Container>
  </footer>
);

export default Header;
