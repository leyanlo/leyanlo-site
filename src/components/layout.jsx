import * as PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Tabs from './tabs';

const Main = styled.main`
  /* iOS Safari typically adds 112px of toolbars */
  --mainMinHeight: calc(
    100vh - var(--headerHeight) - var(--navbarHeight) - var(--tabsHeight) -
      112px
  );

  display: flex;
  flex-direction: column;
  min-height: var(--mainMinHeight);
  padding-right: var(--safeAreaInsetRight);
  padding-bottom: calc(
    var(--safeAreaInsetBottom) + var(--navbarHeight) + var(--tabsHeight)
  );
  padding-left: var(--safeAreaInsetLeft);
  ${props => (props['has-tabs'] ? `--tabsHeight: 40px` : ``)};

  /* Desktop */
  @media screen and (min-width: 1024px) {
    /* No toolbars */
    --mainMinHeight: calc(100vh - var(--headerHeight));

    padding-bottom: calc(var(--safeAreaInsetBottom) + var(--navbarHeight));
  }
`;

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
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@leyanlo' },
            { property: 'og:title', content: data.site.siteMetadata.title },
            {
              property: 'og:description',
              content: data.site.siteMetadata.description
            },
            {
              property: 'og:image',
              content: 'https://www.leyanlo.com/img/logo-fb.png'
            },
            { property: 'og:url', content: 'https://www.leyanlo.com/' },
            { property: 'og:site_name', content: data.site.siteMetadata.title },
            {
              property: 'twitter:title',
              content: data.site.siteMetadata.title
            },
            {
              property: 'twitter:description',
              content: data.site.siteMetadata.description
            },
            {
              property: 'twitter:image',
              content: 'https://www.leyanlo.com/img/logo-fb.png'
            }
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
        <Main has-tabs={tabs}>
          {tabs && <Tabs tabs={tabs} />}
          {children}
        </Main>
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
