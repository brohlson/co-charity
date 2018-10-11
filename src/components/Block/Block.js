import React from 'react'
import PropTypes from 'prop-types'
import _ from 'underscore'

import './Block.scss'

export default class Block extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  }

  _renderBlockItems = () => {
    let { items } = this.props
    return _.map(items, (item, index) => {
      let { Name, Description, Icon, Link } = item
      let Url = Link + '?ref=chaseohlson'
      return (
        <a key={index} href={Url}>
          <div className="item">
            <div className="name">
              <h2>
                <img src={Icon[0].url} alt={Name} />
                {Name}
              </h2>
            </div>
            <div className="description">
              <p>{Description}</p>
            </div>
          </div>
        </a>
      )
    })
  }

  render() {
    let { title } = this.props
    return (
      <div className="block__root">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="items">{this._renderBlockItems()}</div>
      </div>
    )
  }
}