import { Link } from 'gatsby';
import React from 'react';

const Tabs = () => (
  <ul className="tabs">
    {/* Make sure to name these so there is proper hinting on iPhone X */}
    <li>
      <Link to="/cubing" className="tabs__link" activeClassName="-active">
        Links
      </Link>
    </li>
    <li>
      <Link
        to="/cubing/beginner"
        className="tabs__link"
        activeClassName="-active"
      >
        Beginner solution
      </Link>
    </li>
    <li>
      <Link
        to="/cubing/intermediate"
        className="tabs__link"
        activeClassName="-active"
      >
        Intermediate algs
      </Link>
    </li>
    <li>
      <Link
        to="/cubing/advanced"
        className="tabs__link"
        activeClassName="-active"
      >
        Advanced algs
      </Link>
    </li>
    <li>
      <Link to="/cubing/bld" className="tabs__link" activeClassName="-active">
        Blindfold algs
      </Link>
    </li>
  </ul>
);

export default Tabs;
