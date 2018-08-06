import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Leyan Lo"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,500',
          rel: 'stylesheet'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: 'favicon.png'
        }
      ]}
    />
    <Header />
    <div
      style={{
        minHeight: 'calc(100vh - 100px)',
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
