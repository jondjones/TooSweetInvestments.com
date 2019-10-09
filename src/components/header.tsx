import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../img/logo.jpg'

const Header = ({ siteTitle: string }) => (
  <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
  <div className="container">
    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
      aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <a className="navbar-brand text-brand" href="/">
      <img src={Logo} alt="Too Sweet Investments"/>
    </a>
    <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse"
      data-target="#navbarTogglerDemo01" aria-expanded="false">
      <span className="fa fa-search" aria-hidden="true"></span>
    </button>
    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="index.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="news.html">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
    <button type="button" className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse"
      data-target="#navbarTogglerDemo01" aria-expanded="false">
      <span className="fa fa-search" aria-hidden="true"></span>
    </button>
  </div>
</nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
