module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  pathPrefix: 'gatsby-site',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Leyan Lo",
        short_name: "Leyan Lo",
        start_url: "/",
        background_color: "#E3E4E8",
        theme_color: "#99327F",
        display: "minimal-ui",
        icon: "/static/favicon.png"
      },
    },
  ],
};
