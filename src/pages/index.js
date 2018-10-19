import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Background from '../images/hero-bg-min.jpg'
import Waves from '../images/waves.svg'
import _ from 'underscore'

let formatDollars = raw => {
  let formatted = parseInt(raw) / 100
  let string = '$' + formatted
  return string
}

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
          <Link to="/girls-who-code">Rainn</Link>
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
  query index {
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
