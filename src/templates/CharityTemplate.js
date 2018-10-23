import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Waves from '../images/waves.svg'
import Back from '../images/back.svg'
import _ from 'underscore'
import { formatDollars } from '../util/helpers'
import moment from 'moment'

import '../scss/templates/CharityTemplate.scss'

export default class CharityTemplate extends React.Component {
  _renderHero = () => {
    let { name, image, link } = this.props.pageContext

    let cname = name
      .replace(/ /g, '-')
      .replace(/[,&]/g, '')
      .toLowerCase()
    let style
    if (image !== null) {
      style = {
        backgroundImage: `url(${image[0].url})`,
      }
    }

    return (
      <div className="hero__root" style={style}>
        <div className={`overlay ${cname}`} />
        <div className="back">
          <Link to="/">
            <img src={Back} alt="Back" />
          </Link>
        </div>
        <img src={Waves} alt="Waves" className="waves" />
        <div className="content">
          <h1>{name}</h1>
          <a
            href={link + '?ref=chaseohlson'}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="button"
          >
            Visit Site
          </a>
        </div>
      </div>
    )
  }

  _renderBioMarkup = () => {
    let { bio } = this.props.pageContext
    return { __html: bio }
  }

  _renderBio = () => {
    let { heading, name } = this.props.pageContext
    let cname = name
      .replace(/ /g, '-')
      .replace(/[,&]/g, '')
      .toLowerCase()
    return (
      <div className="bio__wrap">
        <div className={`heading ${cname}`}>
          <h2>{heading}</h2>
        </div>
        <div
          className="bio"
          dangerouslySetInnerHTML={this._renderBioMarkup()}
        />
      </div>
    )
  }

  _renderDonations = () => {
    let donations = this.props.data.allAirtable.edges
    let pruned = []
    _.map(donations, donation => {
      if (
        donation.node.data.Charity[0].data.Name === this.props.pageContext.name
      ) {
        pruned.push(donation)
      }
    })
    if (pruned.length) {
      return _.map(pruned, (donation, index) => {
        let { Amount, Client, donationDate, clientLink } = donation.node.data
        let formattedDate = moment(donationDate).format('dddd, MMMM Do YYYY')
        return (
          <div key={index} className={`item`}>
            <p>
              {formatDollars(Amount)} donated thanks to{' '}
              <a target="_blank" rel="noopener noreferrer" href={clientLink}>
                {Client}
              </a>{' '}
              on {formattedDate}
            </p>
          </div>
        )
      })
    } else {
      return (
        <div className="item noResults">
          <p>
            No donations yet!{' '}
            <a href="mailto:chase@chaseohlson.com">Email me</a> and let's make
            it happen!
          </p>
        </div>
      )
    }
  }

  render() {
    let { name, desc } = this.props.pageContext
    let cname = name
      .replace(/ /g, '-')
      .replace(/[,&]/g, '')
      .toLowerCase()
    return (
      <Layout>
        <Helmet>
          <title>{name} | ChaseOhlson.org</title>
          <meta name="description" content={desc} />
        </Helmet>
        <div className="charity__temp__root">
          {this._renderHero()}
          <div className="template__body">
            <div className="left">{this._renderBio()}</div>
            <div className="right">
              <div className="don__wrap">
                <div className={`heading ${cname}`}>
                  <h2>Donation History</h2>
                </div>
                <div className="don__items">{this._renderDonations()}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query charity {
    allAirtable(filter: { table: { eq: "Donations" } }) {
      edges {
        node {
          data {
            Amount
            Client
            clientLink
            donationDate
            Charity {
              data {
                Name
              }
            }
          }
        }
      }
    }
  }
`
