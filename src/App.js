import React, { Component } from 'react';
import Homepage from './pages/homepage';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavIcon from './img/favicon.png';
import AppleFavIcon from './img/apple-touch-icon.png';
import Ionicons from './lib/ionicons/css/ionicons.min.css';
import Animate from './lib/animate/animate.min.css';
import FontAwesome from './lib/font-awesome/css/font-awesome.min.css';
import Stylesheet from './css/style.css';

class App extends Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>Too Sweet Investments</title>
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta content="" name="keywords" />
          <meta content="" name="description" />
      
          <link href={FavIcon} rel="icon" />
          <link href={AppleFavIcon} rel="apple-touch-icon" />
        
          <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />

          <link href={FontAwesome} rel="stylesheet" />
          <link href={Animate} rel="stylesheet" />
          <link href={Ionicons} rel="stylesheet" />
          <link href={Stylesheet} rel="stylesheet" />
        </head>
        <body>
              <Header />
              <Homepage />   
              <Footer />
              <a href="/" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
        </body>
      </html>
    );
  }
}

export default App;
