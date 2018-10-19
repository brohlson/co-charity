module.exports = {
  siteMetadata: {
    title: "Chase Ohlson's Charities",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
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
        apiKey: `key31hXHeiUTuSBTh`, // may instead specify via env, see below
        tables: [
          {
            baseId: `app5iTpyvbwUvQek4`,
            tableName: `Charities`,
            tableView: `Main Grid View`,
            queryName: `master`,
            mapping: { Attachments: `fileNode` },
          },
          {
            baseId: `app5iTpyvbwUvQek4`,
            tableName: `Donations`,
            tableView: `Main Grid View`,
            queryName: `master`,
            mapping: { Attachments: `fileNode` },
          },
        ],
      },
    },
  ],
}
