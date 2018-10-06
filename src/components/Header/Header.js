import React from 'react'
import Logo from '../../images/co-logo-white.svg'
import FacebookIcon from '../../images/icon-facebook.svg'
import TwitterIcon from '../../images/icon-twitter.svg'
import InstagramIcon from '../../images/icon-instagram.svg'
import GithubIcon from '../../images/icon-github.svg'
import MailIcon from '../../images/icon-mail.svg'

import './Header.scss'

const Header = ({ siteTitle }) => (
  <div className="header__root">
    <div className="callout">
      <div className="left">
        <p>I'm do freelancing!</p>
      </div>
      <div className="right">
        <a
          href="https://chaseohlson.com"
          target="blank"
          className="btn__outline"
        >
          Hire Me
        </a>
      </div>
    </div>
    <div className="links">
      <div className="icon">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="social">
        <a href="https://www.facebook.com/chasejohlson" target="blank">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://twitter.com/_chaseohlson" target="blank">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
        <a href="https://instagram.com/brohlson" target="blank">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="https://github.com/brohlson" target="blank">
          <img src={GithubIcon} alt="Github" />
        </a>
        <a href="mailto:chase@chaseohlson.com" target="blank">
          <img src={MailIcon} alt="Mail" />
        </a>
      </div>
    </div>
  </div>
)

export default Header
