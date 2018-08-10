import React from 'react';
import './hero.css';

export default ({ children }) => (
  <div className="hero">
    <div className="hero__card">{children}</div>
  </div>
);
