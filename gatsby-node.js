const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug

  if (node.internal.type === `Airtable` && node.table === `Charities`) {
    slug = `/${node.data.Name.replace(/ /g, '-')
      .replace(/[,&]/g, '')
      .toLowerCase()}/`

    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  return new Promise((resolve, reject) => {
    const pages = []
    const tempChar = path.resolve(`src/templates/CharityTemplate.js`)

    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
          {
            allAirtable(filter: { table: { eq: "Charities" } }) {
              edges {
                node {
                  id
                  data {
                    Name
                    Link
                    bioLong
                    bioShort
                    bioHeading
                    Image {
                      url
                    }
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          result.errors.forEach(error => {
            console.log(error)
          })

          reject(result.errors)
        }

        result.data.allAirtable.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug, // required, we don't have frontmatter for this page hence separate if()
            component: tempChar,
            context: {
              name: edge.node.data.Name,
              link: edge.node.data.Link,
              heading: edge.node.data.bioHeading,
              bio: edge.node.data.bioLong,
              desc: edge.node.data.bioShort,
              image: edge.node.data.Image,
            },
          })
        })

        return
      })
    )
  })
}
