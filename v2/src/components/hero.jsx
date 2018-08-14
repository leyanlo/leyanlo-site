import PropTypes from 'prop-types';
import React from 'react';

import './hero.css';

const Hero = ({ children }) => (
  <div className="hero">
    <div className="hero__card">{children}</div>
  </div>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired
};

export default Hero;
