import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import _ from 'underscore'
import '../scss/index.scss'

class Index extends React.Component {
  _renderLists = () => {
    let records = this.props.data.allAirtable.edges
    return _.map(records, (record, index) => {
      let { Name, Category, Icon, Link } = record.node.data
      return (
        <li key={index}>
          {Name} <img width="20px" src={Icon[0].url} alt={Name} />
        </li>
      )
    })
  }
  render() {
    return (
      <Layout>
        <Helmet>
          <title>
            Best Freelance Tools | Web Development Tools by Chase Ohlson
          </title>
          <meta
            name="description"
            content="Best freelance tools for freelancers & web developers.  List curated by Chase Ohlson, a freelance web developer in Los Angeles."
          />
        </Helmet>
        <ul>{this._renderLists()}</ul>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query tools {
    allAirtable {
      edges {
        node {
          data {
            Name
            Link
            Icon {
              url
            }
            Category
          }
        }
      }
    }
  }
`
