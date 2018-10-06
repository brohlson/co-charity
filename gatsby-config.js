module.exports = {
  siteMetadata: {
    title: "Chase Ohlson's Web Tools",
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
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `key31hXHeiUTuSBTh`, // may instead specify via env, see below
        tables: [
          {
            baseId: `app6RAd5Wox2olcqi`,
            tableName: `Master`,
            tableView: `Main Grid`,
            queryName: `master`,
            // tableLinks: [`Name`, `Link`, `Icon`, `Category`],
            mapping: { Attachments: `fileNode` },
          },
        ],
      },
    },
  ],
}
