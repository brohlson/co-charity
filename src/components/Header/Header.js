import React from 'react'
import { Link } from 'gatsby'

import './Header.scss'

const Header = ({ siteTitle }) => (
  <div className="header__root">
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </div>
)

export default Header
