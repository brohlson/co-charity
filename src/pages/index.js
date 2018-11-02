import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import Background from '../images/hero-bg-min.jpg'
import Waves from '../images/waves.svg'
import Block from '../components/Block'
import _ from 'underscore'
import { formatDollars } from '../util/helpers'

class Index extends React.Component {
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
      background: `url(${Background})`,
    }

    return (
      <div className="hero__root" style={style}>
        <div className="overlay" />
        <img src={Waves} alt="Waves" className="waves" />
        <div className="content">
          <h1>
            When you work with me on a freelance dev project, part of your
            downpayment will go to support one of these organizations:
          </h1>
          <p>
            Since October 2018, we've made <span>{donations}</span> total
            donations worth <span>{formatDollars(total)}</span>
          </p>
        </div>
      </div>
    )
  }

  _renderBlocks = () => {
    let records = this.props.data.allAirtable.edges
    return _.map(records, (record, index) => {
      if (record.node.data.Type === 'Charity') {
        let { Name, bioShort, Image } = record.node.data
        let slug =
          Name.replace(/ /g, '-')
            .replace(/[,&]/g, '')
            .toLowerCase() + '/'
        return (
          <Block
            key={index}
            title={Name}
            bio={bioShort}
            img={Image}
            slug={slug}
          />
        )
      }
    })
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
        <div className="blocks__root">{this._renderBlocks()}</div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allAirtable {
      edges {
        node {
          data {
            Type
            Name
            Amount
            bioShort
            Image {
              url
            }
          }
        }
      }
    }
  }
`
