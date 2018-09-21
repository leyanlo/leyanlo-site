module.exports = {
  siteMetadata: {
    title: 'Leyan Lo',
    description: 'Leyan Lo’s personal website',
    keywords: 'software, violin, cubing'
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /images/
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    }
  ]
};
