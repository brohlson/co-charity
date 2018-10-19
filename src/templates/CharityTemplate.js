import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import Waves from '../images/waves.svg'

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
    return (
      <div className="bio" dangerouslySetInnerHTML={this._renderBioMarkup()} />
    )
  }
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Template</title>
          <meta name="description" content="Template" />
        </Helmet>
        <div className="charity__temp__root">
          {this._renderHero()}
          <div className="template__body">{this._renderBio()}</div>
        </div>
      </Layout>
    )
  }
}

// export const pageQuery = graphql`
//   query charity {
//     allAirtable(filter: { table: { eq: "Charities" } }) {
//       edges {
//         node {
//           data {
//             Type
//           }
//         }
//       }
//     }
//   }
// `
