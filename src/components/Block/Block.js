import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './Block.scss'

export default class Block extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.array.isRequired,
    bio: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }

  render() {
    let { title, img, bio, slug } = this.props
    let style = {
      backgroundImage: `url(${img[0].url})`,
    }
    let gClass = slug.substring(0, slug.length - 1)
    return (
      <div className={`block__root ${gClass}`}>
        <Link className="link" to={slug}>
          {title}
        </Link>
        <div className="wrap">
          <div style={style} className="image">
            <div className={`overlay`} />
          </div>
          <div className={`title`}>
            <h2>{title}</h2>
          </div>
          <div className="text">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    )
  }
}
