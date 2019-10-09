import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
      
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="nav-footer">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="/">Home</a>
                </li>
                <li className="list-inline-item">
                  <a href="/">About</a>
                </li>
                <li className="list-inline-item">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="socials-a">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="/">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <i className="fa fa-dribbble" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright-footer">
              <p className="copyright color-text-a">
                &copy; Copyright
                <span className="color-a">Too Sweet Investments</span> All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;
