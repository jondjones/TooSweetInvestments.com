import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import renderIf from 'render-if';
import MyFilteringComponent from './my-components/filter-component';

class App extends Component {
  render() {

    const countries =
    [
        "Afghanistan",
        "Åland Islands",
        "Albania",
        "Algeria"
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {renderIf(1 + 2 === 3)(
            <span>The universe is working</span>
          )}
        </header>
        <MyFilteringComponent content={countries} />
      </div>
    );
  }
}

export default App;
