import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Tabs = ({ tabs }) => (
  <ul className="tabs">
    {tabs &&
      tabs.map(tab => {
        let linkProps;
        if (tab.isBase) {
          linkProps = { className: 'tabs__link', activeClassName: '-active' };
        } else {
          linkProps = {
            getProps: ({ isPartiallyCurrent }) =>
              isPartiallyCurrent ? { className: 'tabs__link -active' } : { className: 'tabs__link' }
          };
        }
        return (
          <li key={tab.to}>
            <Link to={tab.to} {...linkProps}>
              {tab.title}
            </Link>
          </li>
        );
      })}
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
