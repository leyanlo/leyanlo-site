import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Tabs from './tabs';

const Layout = ({ children, tabs }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Leyan Lo’s personal website' },
            { name: 'keywords', content: 'software, violin, cubing' }
          ]}
          link={[
            {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/apple-touch-icon.png'
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={`main ${tabs ? '-hasTabs' : ''}`}>
          {tabs && <Tabs tabs={tabs} />}
          {children}
        </main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  )
};

Layout.defaultProps = {
  tabs: null
};

export default Layout;
