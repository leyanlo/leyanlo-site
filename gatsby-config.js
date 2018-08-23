module.exports = {
  siteMetadata: {
    title: 'Leyan Lo'
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Source Sans Pro:400,400i,700', 'Source Serif Pro:600']
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Leyan Lo',
        short_name: 'Leyan Lo',
        start_url: '/',
        background_color: '#E3E4E8',
        theme_color: '#001F7F',
        display: 'minimal-ui',
        icon: 'src/images/logo.png'
      }
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false
          }
        }
      }
    }
  ]
};
