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
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@leyanlo' },
            { property: 'og:title', content: data.site.siteMetadata.title },
            { property: 'og:description', content: data.site.siteMetadata.description },
            { property: 'og:image', content: 'https://angry-kowalevski-0ee72d.netlify.com/img/logo-fb.png' },
            { property: 'og:url', content: 'https://angry-kowalevski-0ee72d.netlify.com/' },
            { property: 'og:site_name', content: data.site.siteMetadata.title },
            { property: 'twitter:title', content: data.site.siteMetadata.title },
            { property: 'twitter:description', content: data.site.siteMetadata.description },
            { property: 'twitter:image', content: 'https://angry-kowalevski-0ee72d.netlify.com/img/logo-fb.png' }
          ]}
          link={[
            {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/img/apple-touch-icon.png'
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
      title: PropTypes.string.isRequired,
      isBase: PropTypes.bool
    }).isRequired
  )
};

Layout.defaultProps = {
  tabs: null
};

export default Layout;
