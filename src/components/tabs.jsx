import { Location, navigate } from '@reach/router';
import PropTypes from 'prop-types';
import React from 'react';

function onClick(e) {
  e.preventDefault();
  navigate(new URL(e.target.href).pathname, {
    state: {
      tabsScrollLeft: document.querySelector('.tabs').scrollLeft
    }
  });
}

const Tabs = ({ tabs }) => (
  <Location>
    {({ location }) => {
      // document is not defined during build
      if (typeof document !== 'undefined') {
        setTimeout(() => {
          // Hack until this is resolved: https://github.com/gatsbyjs/gatsby/issues/5773
          let scrollLeft;
          if (location.state && location.state.tabsScrollLeft) {
            scrollLeft = location.state && location.state.tabsScrollLeft;
          } else if (document.querySelector('.tabs__link.-active')) {
            scrollLeft = document.querySelector('.tabs__link.-active').offsetLeft;
          } else {
            scrollLeft = 0;
          }
          document.querySelector('.tabs').scrollLeft = scrollLeft;
        });
      }

      return (
        <ul className="tabs">
          {tabs &&
            tabs.map(tab => {
              let className = 'tabs__link';
              if (location.pathname === tab.to) {
                className += ' -active';
              }
              return (
                <li key={tab.to}>
                  <a href={tab.to} className={className} onClick={onClick}>
                    {tab.title}
                  </a>
                </li>
              );
            })}
        </ul>
      );
    }}
  </Location>
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
