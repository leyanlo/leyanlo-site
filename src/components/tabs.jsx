import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Tabs = ({ tabs }) => (
  <ul className="tabs">
    {tabs &&
      tabs.map(tab => (
        <li className="tabs__item" key={tab.to}>
          <Link to={tab.to} className="tabs__link" activeClassName="-active">
            {tab.title}
          </Link>
        </li>
      ))}
  </ul>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Tabs;
