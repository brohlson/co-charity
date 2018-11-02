require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Chase Ohlson's Charities",
    siteUrl: `https://chaseohlson.org`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://chaseohlson.org`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#222',
        theme_color: '#222',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        tables: [
          {
            baseId: `app5iTpyvbwUvQek4`,
            tableName: `Charities`,
            tableView: `Main Grid View`,
            queryName: `charities`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `app5iTpyvbwUvQek4`,
            tableName: `Donations`,
            tableView: `Main Grid View`,
            queryName: `donations`,
            mapping: { Attachments: `fileNode` },
            tableLinks: [`Charity`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-127060116-2',
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
  ],
}
