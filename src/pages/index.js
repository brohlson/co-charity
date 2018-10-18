import React from 'react'
import Layout from '../components/layout'
import Block from '../components/Block'
import { Helmet } from 'react-helmet'
import { formatDollars } from './helpers'
import Background from '../images/hero-bg-min.jpg'
import Waves from '../images/waves.svg'
import _ from 'underscore'

class Index extends React.Component {
  // _renderBlocks = () => {
  //   let records = this.props.data.allAirtable.edges
  //   let arr = []
  //   _.map(records, record => {
  //     arr.push(record.node.data)
  //   })
  //   let groups = _.groupBy(arr, 'Category')
  //   return _.map(groups, (group, index) => {
  //     let title = group[0].Category
  //     let blockProps = {
  //       items: group,
  //       key: index,
  //       title,
  //     }
  //     return <Block {...blockProps} />
  //   })
  // }

  _renderHero = () => {
    let donations = 0
    let total = 0
    let records = this.props.data.allAirtable.edges

    _.map(records, record => {
      if (record.node.data.Type === 'Donation') {
        total = total + parseInt(record.node.data.Amount)
        donations++
      }
    })

    const style = {
      backgroundImage: `url(${Background})`,
    }

    return (
      <div className="hero__root" style={style}>
        <div className="overlay" />
        <img src={Waves} alt="Waves" className="waves" />
        <div className="content">
          <h1>
            When you work with me on a freelance project, part of your
            downpayment will go to support one of these organizations.
          </h1>
          <p>
            Together, we've made <span>{donations}</span> donations totalling{' '}
            <span>{formatDollars(total)}</span>
          </p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>
            Chase Ohlson's Charities | Donations from Freelance Web Development
          </title>
          <meta
            name="description"
            content="When you work with Chase Ohlson on a freelance web development project, part of your donation will fo to one of these amazing organizations."
          />
        </Helmet>
        {this._renderHero()}
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
            Type
            Name
            Amount
          }
        }
      }
    }
  }
`
