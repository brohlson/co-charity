import React from 'react'
import Layout from '../components/layout'
import Block from '../components/Block'
import { Helmet } from 'react-helmet'
import _ from 'underscore'

class Index extends React.Component {
  _renderBlocks = () => {
    let records = this.props.data.allAirtable.edges
    let arr = []
    _.map(records, record => {
      arr.push(record.node.data)
    })
    let groups = _.groupBy(arr, 'Category')
    return _.map(groups, (group, index) => {
      let title = group[0].Category
      let blockProps = {
        items: group,
        key: index,
        title,
      }
      return <Block {...blockProps} />
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
        <div className="blocks__root">{this._renderBlocks()}</div>
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
            Description
            isAffiliate
            isFeatured
          }
        }
      }
    }
  }
`
