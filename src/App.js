import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import renderIf from 'render-if';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {renderIf(1 + 2 === 3)(
            <span>The universe is working</span>
          )}
        </header>
      </div>
    );
  }
}

export default App;
