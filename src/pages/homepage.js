import React, { Component } from 'react';
import Slide1 from '../img/slide-1.jpg';

class Homepage extends Component {
  render() {
    return (
      <div className="intro intro-carousel">
      <div id="carousel" className="owl-carousel owl-theme">
        <div className="carousel-item-a intro-item bg-image" style={{ backgroundImage: 'url('+ Slide1 +')'}} >
          <div className="overlay overlay-a"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="intro-body">
                      <p className="intro-title-top">Nottingham</p>
                      <h1 className="intro-title mb-4">
                        41 Egpyt Road 
                      </h1>
                      <p className="intro-subtitle intro-price">
                        <a href="/"><span className="price-a">More Info</span></a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Homepage;
